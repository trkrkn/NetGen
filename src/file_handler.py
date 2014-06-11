#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
NetGen is a tool for financial network analysis
Copyright (C) 2013 Tarik Roukny (troukny@ulb.ac.be)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
"""
# ==========================================
#   Libraries and Packages
import csv
# ==========================================

class FileHandler:

        # -------------------------------------------------------------
        # 
        #  init (file_name, file_extension, delimiter)
        # 
        # -------------------------------------------------------------

        def __init__(self, file_directory, file_name, file_extension, delimiter, single_file = 'off', separate_line = ''):
        
                self.file_name          = file_name
                self.directory          = file_directory
                self.full_name          = file_name + '.' + file_extension
                self.extension          = file_extension
                self.delimiter          = delimiter
                self.data               = []
                self.admitted_extension = ['csv','txt']
                self.error_message      = ''
                self.single_file        = False
                if single_file == 'on':
                    self.single_file        = True
                self.separate_line      = 'no separation'
                if separate_line != '':
                    self.separate_line  = separate_line
                    self.separate_line  = self.separate_line + '\n'    
                self.protocol_missing_value = 'NA'

        # -------------------------------------------------------------
        # 
        #  check_valid ()
        # 
        # -------------------------------------------------------------

        def check_valid(self):

                if self.extension not in self.admitted_extension:
                        self.error_message = self.error_message + '  #ERROR : file extension [{0}] not supported \n'.format(self.extension)
                        return False
                else:
                        return True
                
        # -------------------------------------------------------------
        # 
        #  unquote_data ()
        # 
        # -------------------------------------------------------------

        def unquote_data(self):

               for line in self.data:
                       for entry in line:
                               entry = entry.replace('"','')
 
        # -------------------------------------------------------------
        # 
        #  import_data (short, missing_value = False)
        # 
        # -------------------------------------------------------------

        def import_data(self, short, missing_value = False):

                if self.extension == 'txt':
                        file            = open(self.directory+self.full_name,'rU')
                        read_data       = []
                        # for tests and debugging
                        if (short == True):
                                for i in range(10000):
                                        read_data.append(file.readline())
                        else:
                                read_data=file.readlines()

                        for line in read_data:
                                l = line.rstrip('\n')
                                if (self.delimiter == ''):
                                        l = l.split()
                                else:
                                        l = l.split(self.delimiter)
                                if missing_value != False:
                                    l = self.check_missing_values(l, missing_value)
                                self.data.append(l)
                                
                else:
                        if self.extension == 'csv':
                                file_csv = csv.reader(open(self.directory+self.full_name, 'rb'),delimiter=self.delimiter)
                                for row in file_csv:
                                        if missing_value != False:
                                            row = self.check_missing_values(row, missing_value)
                                        self.data.append(row)
        # -------------------------------------------------------------
        # 
        #  check_missing_values(elements, missing_value)
        # 
        # -------------------------------------------------------------
        
        def check_missing_values(self, elements, missing_value):
            
            for i in range(len(elements)):
                if not missing_value:
                    if not elements[i] :
                        elements[i] = self.protocol_missing_value
                else:
                    if elements[i] == missing_value:
                        elements[i] = self.protocol_missing_value
            return elements


        # -------------------------------------------------------------
        # 
        #  write_data_file ()
        # 
        # -------------------------------------------------------------

        def write_data_file(self, missing_value):
                
                if self.extension == 'txt':
                        mode = 'w'
                        if (self.single_file):
                            mode = 'a'
                        out_file = open(self.directory + self.full_name, mode)
                        if self.separate_line != 'no separation' and self.single_file:
                            out_file.write(self.separate_line)
                        for line in self.data:
                                l = ''
                                for elem in line:
                                        if elem == self.protocol_missing_value:
                                            elem = missing_value
                                        if self.delimiter == '':
                                                l = l + ' ' + (str(elem))
                                        else:
                                                l = l + self.delimiter + (str(elem))
                                l = l + '\n'
                                out_file.write(l[1:])
                        out_file.close()
                else:
                        if self.extension == 'csv':
                                out_file = csv.writer(open(self.directory+self.full_name, 'w'), 
                                                        delimiter=self.delimiter)
                                for line in self.data:
                                        out_file.writerow(line)

#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ==========================================
#   Libraries and Packages
import csv
# ==========================================

class FileHandler:

        # -------------------------------------------------------------
        # 
        #  init (file_name, file_format, delimiter)
        # 
        # -------------------------------------------------------------

        def __init__(self, file_name, file_format, delimiter):
        
                names                   = file_name.split('/')
                name                    = names[len(names)-1]
                self.name               = name
                self.file_name          = file_name
                self.directory          = file_name.replace(name,'')
                self.full_name          = name+'.'+file_format
                self.format             = file_format
                self.delimiter          = delimiter
                self.data               = []
                self.save_directory     = 'results/'
                self.admitted_format    = ['csv','txt']
                self.error_message      = ''


        # -------------------------------------------------------------
        # 
        #  check_valid ()
        # 
        # -------------------------------------------------------------

        def check_valid(self):

                if self.format not in self.admitted_format:
                        self.error_message = self.error_message + '  #ERROR : file format [{0}] not supported \n'.format(self.format)
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
        #  import_data ()
        # 
        # -------------------------------------------------------------

        def import_data(self, short):

                if self.format == 'txt':
                        file            = open(self.directory+self.full_name,'rU')
                        read_data       = []
                        # for tests and debugging
                        if (short == True):
                                for i in range(1000):
                                        read_data.append(file.readline())
                        else:
                                read_data=file.readlines()

                        for line in read_data:
                                l = line.rstrip('\n')
                                if (self.delimiter == ''):
                                        l = l.split()
                                else:
                                        l = l.split(self.delimiter)
                                for i in range(len(l)):
                                        l[i] = l[i].replace('"','')
                                self.data.append(l)
                                
                else:
                        if self.format == 'csv':
                                file_csv = csv.reader(open(self.directory+self.full_name, 'rb'),delimiter=self.delimiter)
                                for row in file_csv:
                                        self.data.append(row)

        # -------------------------------------------------------------
        # 
        #  write_data_file ()
        # 
        # -------------------------------------------------------------

        def write_data_file(self):

                if self.format == 'txt':
                        out_file = open(self.directory + self.full_name, 'w')
                        for line in self.data:
                                l = ''
                                for elem in line:
                                        if self.delimiter == '':
                                                l = l + ' ' + (str(elem))
                                        else:
                                                l = l + self.delimiter + (str(elem))
                                l = l + '\n'
                                out_file.write(l[1:])
                        out_file.close()
                else:
                        if self.format == 'csv':
                                out_file = csv.writer(open(self.save_directory+self.full_name, 'w'), 
                                                        delimiter=self.delimiter)
                                for line in self.data:
                                        out_file.writerow(line)

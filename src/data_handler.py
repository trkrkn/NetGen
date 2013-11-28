#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ==========================================
#   Libraries and Packages
from datetime import datetime
# ==========================================

class DataHandler:

        # -------------------------------------------------------------
        # 
        #  init ()
        # 
        # -------------------------------------------------------------

        def __init__(self):
        
                self.data               = []
                self.structure          = []
                self.data_final         = []
                self.data_bogus         = []
                self.error_message      = ''
                self.admitted_format    = ['str','float','int','date']

        # -------------------------------------------------------------
        # 
        #  check_valid ()
        # 
        # -------------------------------------------------------------

        def check_valid(self):

                valid   = True
                i       = 1
                while i < len(self.structure):
                        if self.structure[i].split()[0] not in self.admitted_format:
                                self.error_message = self.error_message + '  #ERROR : data format [{0}] not supported \n'.format(self.structure[i])
                                valid              = False
                        i = i+2
                return valid

        # -------------------------------------------------------------
        #  
        #  structure_data ()
        #  -- in progress --
        # -------------------------------------------------------------

        def structure_data(self):
                # NO BOGUS DETECTION!
                for data_line in self.data:
                        l = []
                        i = 0
                        while i < len(self.structure) and i/2 < len(data_line):
                                elem    = data_line[int(i/2)]
                                format  = self.structure[i+1]
                                try:
                                        l.append(self.cast_entry(elem,format))
                                except: 
                                        l.append(elem)
                                i = i+2
                        self.data_final.append(l)

        # -------------------------------------------------------------
        # 
        #  clean_data (raw_structure)
        #  -- in progress --
        # -------------------------------------------------------------

        def clean_data(self, raw_structure):
            
                for data_line in self.data:
                        #to know wether the entry needs to be taken into account (not if empty cells for example)
                        input   = True
                        l       = []
                        i = 0
                        while i<len(self.structure):
                                # for each element from clean data config
                                if self.structure[i] in raw_structure:
                                        # if the element exists in raw data
                                        pos = [a for a,x in enumerate(raw_structure) if x == self.structure[i]][0]
                                        # !- accept empty cells#
                                        if data_line[int(pos/2)] == '':
                                                l.append('')
                                        else:
                                                l.append(self.cast_entry(data_line[int(pos/2)],self.structure[i+1]))
                                else:
                                    l.append('ERROR - No Matching for the two structures')
                                    print ("WARNING: no matching for {0} in the raw structure".format(structure[i]))

                                i = i+2
                        if input == True: 
                                self.data_final.append(l)

        # -------------------------------------------------------------
        # 
        #  cast_entry (element, format)
        # 
        # -------------------------------------------------------------

        def cast_entry(self, elem, format):

                if elem != 'NA':
                        if 'str' in format:
                                        elem = str(elem)
                        else:
                                if 'int' in format:
                                        elem = int(elem)
                                else:
                                        if 'float' in format:
                                            if ',' in str(elem):
                                                elem = elem.replace(',','.')
                                            elem = float(elem)
                                        else:
                                                if 'date' in format:
                                                        struct = format.split()[2]
                                                        if type (elem) is datetime:
                                                                elem = elem.strftime('%d/%m/%Y')
                                                        
                                                        if struct == 'd/m/y':
                                                                elem = datetime.strptime(elem, '%d/%m/%Y')
                                                        else:
                                                                if struct == 'm/d/y':
                                                                        elem = datetime.strptime(elem, '%m/%d/%Y')
                                                                else:
                                                                        if struct == 'y/d/m':
                                                                                elem = datetime.strptime(elem, '%Y-%d-%m')
                                                                        else:
                                                                                if struct == 'y/m/d':
                                                                                        elem = datetime.strptime(elem, '%Y-%m-%d')
                return elem

        # -------------------------------------------------------------
        # 
        #  is_bogus ()
        # 
        # -------------------------------------------------------------

        def is_bogus(self):

                if len(self.data_bogus) > 0:
                        return True
                else:
                        return False

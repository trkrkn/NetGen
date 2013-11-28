#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
NetGen is a tool for financial network analysis
Copyright (C) 2013 Tarik Roukny (tarikroukny@gmail.com)
"""
# ==========================================
#   Libraries and Packages
from src.file_handler           import FileHandler
from src.data_handler           import DataHandler
from src.mapper                 import Mapper
import sys
# ==========================================

class Analyzer:

        # -------------------------------------------------------------
        # 
        #  __init__ (in_file_directory, in_file_name, 
#                         in_extension, in_delimiter, in_missing_value,
#                         in_quote, 
#                         out_file_directory, out_file_name, 
#                         out_extension, out_delimiter, 
#                         out_missing_value,
#                         raw_data_structure, clean_data_structure) 
        # 
        # -------------------------------------------------------------

        def __init__(self, in_file_directory, in_file_name, 
                         in_extension, in_delimiter, in_missing_value,
                         in_quote, 
                         out_file_directory, out_file_name, 
                         out_extension, out_delimiter, 
                         out_missing_value,
                         out_file_single_file, out_file_separate_line,
                         raw_data_structure, clean_data_structure
                         ):
                
                # initializing file handlers for in and out files
                self.in_file_handler                    = FileHandler (in_file_directory, 
                                                                       in_file_name, in_extension, in_delimiter)
                if out_file_single_file == 'on':
                    if out_file_separate_line == 'title':
                        out_file_separate_line = in_file_name
                                                                           
                self.out_file_handler                   = FileHandler (out_file_directory, 
                                                                       out_file_name, out_extension, out_delimiter,
                                                                       out_file_single_file, out_file_separate_line)
                # initializing data handler for raw and clean data
                self.raw_data_handler                   = DataHandler()
                self.raw_data_handler.structure         = raw_data_structure
                self.clean_data_handler                 = DataHandler()
                self.clean_data_handler.structure       = clean_data_structure
                # initialize the error message string
                self.error_message                      = ''
                self.unquote                            = False
                if in_quote == 'yes':
                        self.unquote                    = True
                self.in_missing_value                   = in_missing_value
                self.out_missing_value                  = out_missing_value

        # -------------------------------------------------------------
        # 
        #  check_valid ()
        # 
        # -------------------------------------------------------------

        def check_valid(self):

                valid = True

                if not self.in_file_handler.check_valid():
                        self.error_message      = self.error_message + self.in_file_handler.error_message
                        valid                   = False

                if not self.out_file_handler.check_valid():
                        self.error_message      = self.error_message + self.out_file_handler.error_message
                        valid                   = False

                if not self.raw_data_handler.check_valid():
                        self.error_message      = self.error_message + self.raw_data_handler.error_message
                        valid                   = False

                if not self.clean_data_handler.check_valid():
                        self.error_message      = self.error_message + self.clean_data_handler.error_message
                        valid                   = False

                return valid

        # -------------------------------------------------------------
        # 
        #  structure_raw_data ()
        # 
        # -------------------------------------------------------------

        def structure_raw_data(self):

                # 1- import data from file
                self.in_file_handler.import_data(False, self.in_missing_value)  # If True show first 1000, if FALSE all dataset
                self.in_file_handler.data       = filter(None, self.in_file_handler.data)
                if self.unquote == True:
                       self.in_file_handler.unquote_data()
                # 2- transfer data to data handler
                self.raw_data_handler.data      = list(self.in_file_handler.data)
                # 3- structure the data
                self.raw_data_handler.structure_data()
                
        # -------------------------------------------------------------
        # 
        #  generate_clean_data ()
        # 
        # -------------------------------------------------------------

        def generate_clean_data(self):

                # 1- transfer data to clean data handler
                self.clean_data_handler.data        = list(self.raw_data_handler.data_final)
                # 2- clean the data given the raw data structure
                self.clean_data_handler.clean_data(self.raw_data_handler.structure)

        # -------------------------------------------------------------
        # 
        #  save_clean_data ()
        # 
        # -------------------------------------------------------------

        def save_clean_data(self):

                # 1- transfer clean data to file handler
                self.out_file_handler.data      = list(self.clean_data_handler.data_final)
                # 2- save the data
                id_list = []
                for line in self.clean_data_handler.data_final :
                    #line = line.split(',')
                    id_list.append(line[0])
                    id_list.append(line[1])

                self.out_file_handler.write_data_file(self.out_missing_value)

        # -------------------------------------------------------------
        # 
        #  map_data (file_directory, file_name,
        #              file_extension, file_delimiter,
        #              kept_id_position, lost_id_position, target_positions, 
        #              drop_unreferenced_entries, target_unreferenced_entries,
        #              drop_ghosts, 
        #              remove_duplicates, target_duplicates_set,
        #              merge_entries, target_merge_set, commands )
        # 
        # -------------------------------------------------------------

        def map_data ( self, file_directory, file_name,
                      file_extension, file_delimiter,
                      replace_ids,
                      kept_id_position, lost_id_position, target_positions, 
                      drop_unreferenced_entries, target_unreferenced_entries,
                      drop_ghosts, 
                      remove_duplicates, target_duplicates_set,
                      merge_entries, target_merge_set, commands ):

                # 1 - initialize file handler
                mapper_file_handler         = FileHandler(file_directory, file_name,
                                                         file_extension, file_delimiter)
                # TODO
                # if not self.mergerFileHandler.check_valid():
                        # stop_system(_mergFileHandler.error_message)
                        
                # 2 - import merge info from file
                mapper_file_handler.import_data(False)
                
                # 3 - initialize data handler
                mapper_data_handler         = DataHandler()
                
                # 4 - transfer data
                mapper_data_handler.data    = list(mapper_file_handler.data)
                
                # 5 - prepare positions from names
                # target positions
                target_position_index = []        
                if target_positions != 'off':
                    target_position_index = self.get_indeces_from_clean_structure (target_positions)
               
                # unreferenced entities
                target_unreferenced_entries_index = []
                if drop_unreferenced_entries != 'off':
                    target_unreferenced_entries_index = self.get_indeces_from_clean_structure (target_unreferenced_entries)
                    
                # duplicate defining set positions
                target_duplicates_set_index   = []
                if remove_duplicates != 'off':
                    target_duplicates_set_index = self.get_indeces_from_clean_structure (target_duplicates_set)
               
                # merge defining set positions    
                target_merge_set_index = []
                if merge_entries != 'off':
                    target_merge_set_index = self.get_indeces_from_clean_structure (target_merge_set)
                    
                # 6 - get the translated commands
                commands = self.get_commands(commands, target_merge_set_index)
                    
                # 7 - initialize a mapper with all info
                mapper      = Mapper(list(self.clean_data_handler.data_final), 
                                                                mapper_data_handler.data,
                                                                replace_ids,
                                                                kept_id_position, lost_id_position,
                                                                target_position_index, 
                                                                drop_unreferenced_entries, target_unreferenced_entries_index,
                                                                drop_ghosts, 
                                                                remove_duplicates, target_duplicates_set_index,
                                                                merge_entries, target_merge_set_index, 
                                                                commands)   
                
                return [list(mapper.mapped_data), mapper.str_counter_ids]
                
        # -------------------------------------------------------------
        # 
        #  get_index_from_clean_structure (position) 
        # 
        # -------------------------------------------------------------
        
        def get_indeces_from_clean_structure (self, positions): 
            
            admitted_all_expression = ['all', 'All', ' ', '']
            indeces = []            
            if positions in admitted_all_expression:
                # take all positions
                indeces = range(len(self.clean_data_handler.structure)/2)
            else:
                # remove spaces before or after the ','
                positions = positions.replace(', ',',')
                positions = positions.replace(' ,',',')
                list_positions = positions.split(',')
                
                for position in list_positions:
                    if position in self.clean_data_handler.structure:
                        index = [i for i in range(len(self.clean_data_handler.structure)) if self.clean_data_handler.structure[i] == position][0]/2
                        indeces.append(index)
                    else:
                        sys.exit("ERROR: variable {0} not found in the clean data structure".format(position))
            return indeces
            
        # -------------------------------------------------------------
        # 
        #  get_commands (commands, other_fields)
        # 
        # -------------------------------------------------------------
        
        def get_commands (self, commands, other_fields): 
            
            final_commands = dict()
            
            admitted_command_expression = ['+', 'same', 'avg']
            
            
            list_commands = commands.replace(', ',',')
            list_commands = list_commands.replace(' ,',',')
            list_commands = list_commands.split(',')
            
            for command in list_commands:
                command = command.replace(' :',':')
                command = command.replace(': ',':')
                command = command.split(':')
                if command[0] in self.clean_data_handler.structure:
                        index = [i for i in range(len(self.clean_data_handler.structure)) if self.clean_data_handler.structure[i] == command[0]][0]/2
                        if command[1] in admitted_command_expression:
                            final_commands[str(index)] = command[1]
                        else:
                            sys.exit("ERROR: Command \'{0}\' not admitted".format(command[1]))
                else:
                    sys.exit("ERROR: In the Command list:\n variable \'{0}\' not found in the clean data structure".format(command[0]))
            
            # check if fields in the command are not in other_fields (fields used for merging recognition)
            for i in range(len(self.clean_data_handler.structure)/2):
                if str(i) not in final_commands:
                    if i not in other_fields:
                        final_commands[str(i)]='same'
                else:
                    if i in other_fields:
                        sys.exit("ERROR: In the Command list:\n variable \'{0}\' given for the merging set and the command set".format(command[0]))
            
            return final_commands

                
        # -------------------------------------------------------------
        # 
        #  get_clean_data ()
        # 
        # -------------------------------------------------------------

        def get_clean_data(self):

                consist_data = self.clean_data_handler.data_final
                return consist_data

        # -------------------------------------------------------------
        # 
        #  get_merged_data ()
        # 
        # -------------------------------------------------------------

        def get_merged_data(self):
                return self.Merger.data_merged

#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
NetGen is a tool for financial network analysis
Copyright (C) 2013 Tarik Roukny (tarikroukny@gmail.com)
"""
# ==========================================
#   Libraries and Packages
import sys
import src.config     as config
from src.analyzer     import Analyzer
from datetime         import datetime

# ==========================================

print ("\n\n---------------------------------------------------------------------------------------------------------------")
print ("     		NetGen  Beta   		     		     		     		     		")
print ("---------------------------------------------------------------------------------------------------------------\n")


# -------------------------------------------------------------
# 
#  stop_system (message)
# 
# -------------------------------------------------------------

def stop_system (message):
	sys.exit(message)

def get_entry_str (vector, i, j):

        entry = ''
        if isinstance (vector, str):
                entry = vector
        else :
                if isinstance (vector [i], str):
                        entry = vector [i]
                else :
                # to add: verification
                        entry = vector[i][j]
        return entry

def get_entry_dict (vector, i, j):

        entry = ''
        if isinstance (vector, dict):
                entry = vector
        else :
                if isinstance (vector [i], dict):
                        entry = vector [i]
                else :
                # to add: verification
                        entry = vector[i][j]
        return entry

#-------------------------------------------------------------------------
#
#  MAIN
#
#-------------------------------------------------------------------------

if __name__ == '__main__':
        
        #####################################
        # Importing information from config #
        #####################################

        file_info                   = [ config.in_file_directory, config.in_file_name, config.in_file_extension, 
                                        config.in_file_delimiter, config.in_file_quote, 
                                        config.in_file_missing_value,
                                        config.out_file_directory, config.out_file_name,
                                        config.out_file_extension, config.out_file_delimiter,
                                        config.out_file_missing_value, 
                                        config.out_file_single_file, config.out_file_separate_line]

        # raw and clean data structure
        raw_data_structure          = config.raw_data_structure
        clean_data_structure        = config.clean_data_structure

        # information related to the mapping-merging processes
        mapping_info                = [ config.mapping_file_directory, config.mapping_file_name,
                                        config.mapping_file_extension, config.mapping_file_delimiter,
                                        config.mapping_replace_ids,
                                        config.mapping_kept_id_position, config.mapping_lost_id_position,
                                        config.mapping_target_position,
                                        config.mapping_drop_unreferenced_entries,
                                        config.mapping_target_unreferenced_entries,
                                        config.mapping_drop_ghosts, 
                                        config.mapping_remove_duplicates,
                                        config.mapping_target_duplicates_set,
                                        config.mapping_merge_entries,
                                        config.mapping_target_merge_set,
                                        config.mapping_commands ]

        n_in_files = 0
        if isinstance(file_info[1], str):
            n_in_files = 1
        else:
            if isinstance(file_info[1], list):
                    n_in_files = len(file_info[1])
        print ('number of in files : ', n_in_files)

        # string text used for the log
        log_text    = '++++++++++++++++++++++++++++++++ \n NETGEN LOG FILE:\n++++++++++++++++++++++++++++++++ \n'

        ##################
        # Launch process #
        ##################

        # for each file in the in_file_name list from config
        for i in range(n_in_files) :

            ##############################
            # Get the proper information #
            ##############################

            # in file
            in_file_directory       = get_entry_str(file_info [0], i, 0)
            in_file_name            = get_entry_str(file_info [1], i, 0)
            in_extension            = get_entry_str(file_info [2], i, 0)
            in_delimiter            = get_entry_str(file_info [3], i, 0)
            in_file_quote           = get_entry_str(file_info [4], i, 0)
            in_file_missing_value   = get_entry_str(file_info [5], i, 0)

            # out file
            out_file_directory      = get_entry_str(file_info [6], i, 0)
            out_file_name           = get_entry_str(file_info [7], i, 0)
            out_extension           = get_entry_str(file_info [8], i, 0)
            out_delimiter           = get_entry_str(file_info [9], i, 0)
            out_file_missing_value  = get_entry_str(file_info [10], i, 0)
            out_file_single_file    = get_entry_str(file_info [11], i, 0)
            out_file_separate_line  = get_entry_str(file_info [12], i, 0)

            start       = datetime.now()

            print ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            print ("     Opening data file : {0}".format(in_file_directory + in_file_name))
            print ("   - Started: " + str(start))
            print ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")

            # for log
            log_text += "\n\n     - DATA FILE : {0} at {1}".format(in_file_directory + in_file_name, str(start))+'\n'

            ########################
            # Read The Config File #
            ########################

            print ("Step 0. CONFIG VERIFICATION\n")

            # initialization - generating an Analyzer with all info to generate file handlers
            _Analyzer = Analyzer( in_file_directory, in_file_name, in_extension, in_delimiter,
                                    in_file_missing_value, in_file_quote,
                                    out_file_directory, out_file_name, out_extension, out_delimiter, 
                                    out_file_missing_value, 
                                    out_file_single_file, out_file_separate_line,
                                    raw_data_structure, clean_data_structure )

            # verification of admitted formats (in, out and data)
            if not _Analyzer.check_valid():
                    stop_system(_Analyzer.error_message)

            ##########################
            # Structure the raw data #
            ##########################

            print ("Step 1. STRUCTURING THE RAW DATA\n")

            _Analyzer.structure_raw_data()
            
            ################################
            # Generate the clean data #
            ################################

            print ("Step 2. GENERATING THE CLEAN DATA\n")

            _Analyzer.generate_clean_data()
            
            ###################
            # Potential - Map #
            ###################

            n_maps = 0

            if isinstance(mapping_info[1], str):
                    n_maps = 1
            else:
                    if isinstance(mapping_info[1], list):
                            n_maps = len(mapping_info[1])
                                                                  
            for j in range(n_maps) :
        
                    print ("Step 2.{0}. SMOOTHING DATA (MAPPING)\n".format(j+1))

                    mapping_file_directory              = get_entry_str(mapping_info[0], j, i)
                    mapping_file_name                   = get_entry_str(mapping_info[1], j, i)
                    mapping_file_extension              = get_entry_str(mapping_info[2], j, i)
                    mapping_file_delimiter              = get_entry_str(mapping_info[3], j, i)
                    mapping_replace_ids                 = get_entry_str(mapping_info[4], j, i)                 
                    mapping_kept_id_position            = get_entry_str(mapping_info[5], j, i)
                    mapping_lost_id_position            = get_entry_str(mapping_info[6], j, i)
                    mapping_target_position             = get_entry_str(mapping_info[7], j, i)
                    mapping_drop_unreferenced_entries   = get_entry_str(mapping_info[8], j, i)
                    mapping_target_unreferenced_entries = get_entry_str(mapping_info[9], j, i)
                    mapping_drop_ghosts                 = get_entry_str(mapping_info[10], j, i)
                    mapping_remove_duplicates           = get_entry_str(mapping_info[11], j, i)
                    mapping_target_duplicates_set       = get_entry_str(mapping_info[12], j, i)
                    mapping_merge_entries               = get_entry_str(mapping_info[13], j, i)
                    mapping_target_merge_set            = get_entry_str(mapping_info[14], j, i)
                    mapping_commands                    = get_entry_str(mapping_info[15], j, i)


#==============================================================================
# #ADD A VERIFICATION STEP!!!
#==============================================================================


                    mapping_results = _Analyzer.map_data( mapping_file_directory, mapping_file_name,
                                                         mapping_file_extension, mapping_file_delimiter,
                                                         mapping_replace_ids,
                                                         mapping_kept_id_position, mapping_lost_id_position,
                                                         mapping_target_position, 
                                                         mapping_drop_unreferenced_entries,
                                                         mapping_target_unreferenced_entries,
                                                         mapping_drop_ghosts, 
                                                         mapping_remove_duplicates,
                                                         mapping_target_duplicates_set,
                                                         mapping_merge_entries,
                                                         mapping_target_merge_set, mapping_commands )

                    _Analyzer.clean_data_handler.data_final     = mapping_results[0]

                    # for log
                    log_text                                    += mapping_results[1] +'\n'
    
            ########################
            # Save clean data      #
            ########################

            print ("Step 3. SAVING THE CLEAN DATA\n")

            _Analyzer.save_clean_data()

            #####################
            # End               #
            #####################

            finish = datetime.now()
            
            print ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            print ("   - Finished: " + str(finish))
            print ("    >> Total time elapsed: "+str(finish-start))
            print ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")

            # for log
            log_text += 'Finished at: {0}\n'.format(str(finish))
        
        print ("---------------------------------------------------------------------------------------------------------------")
        print ("     		PROCESS TERMINATED")
        print ("---------------------------------------------------------------------------------------------------------------\n")

        file = open ('log/netgen_log.txt','w')
        file.write(log_text)
        file.close()

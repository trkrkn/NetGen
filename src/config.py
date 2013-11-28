#!/usr/bin/pythonw
# -*- coding: utf-8 -*-

# ==========================================
#  In-file information
# ==========================================

in_file_directory       = 'input/'
in_file_name            = ['data_test','data_test']
in_file_extension       = 'txt'
in_file_delimiter       = '\t'
#   'on' if entries are quoted:"entry_value"
in_file_quote           = 'off'
in_file_missing_value   = 'NA'


# ==========================================
# ==========================================

# ==========================================
# Structure of the raw data
# 	for each cell, 
# 	enter the name and the type
# 	admitted types: str, float, int, date
# ==========================================

raw_data_structure = [		
			'From',
			'str',
			'To',
			'str', 
			'IRI1',
			'str',
			'IRI2',
			'str', 
			'Exposure',
			'float', 
			'Exp1',
			'float', 
			'Exp2',
			'float',
			'IRI3',
			'str',
			'IRI4',
			'str',
			'IRI5',
			'str'
	       	]
         
# ==========================================
# ==========================================

# ==========================================
# Structure of the clean data
# 	for each cell, 
# 	enter the name and the type
# 	admitted types: str, float, int, date
# ==========================================

clean_data_structure = [
                    'From',
                    'str',
                    'To',
                    'str',
                    'Exposure',
                    'float',
		       	]

# ==========================================
# ==========================================

# ==========================================
# Out-file information
# ==========================================

out_file_directory 	= 'output/'
out_file_name 		= 'clean_data_time_1'
out_file_extension  	= 'txt'
out_file_delimiter 	= ','
out_file_missing_value 	= ''
out_file_single_file   = 'on'
out_file_separate_line = ' '
#defining a separation between the results of the datasets
#   'title' will write down the name of the input file
#   '' will not do any separation
#   or write 


# ==========================================
# Mapping information 
# ==========================================

mapping_file_directory      = 'input/'
mapping_file_name           = 'mapping'
mapping_file_extension      = 'txt'
mapping_file_delimiter      = ','

#-------------------------------------------
# Controls
#-------------------------------------------

# 1 - Positions in the mapping file
#       (column number) of the id to be kept 
# 	and id to be lost in the mapping file
#       count from 0
mapping_replace_ids         = 'on'
mapping_kept_id_position    = '1'
mapping_lost_id_position    = '0'

# 2 - Target Position
#       specify if there is only one specific position 
#       in the clean data structure that needs to be mapped
#       if yes: give the names of the column
#       if no: put 'all'
mapping_target_position  = 'all'
# (ex: ['TO','off','off'])

#-------------------------------------------

# 3 - Drop Unreferenced Entries
#       'on' if all entries can be keeps
#       'off' if only entries containing ids from the file should be kept
mapping_drop_unreferenced_entries   = 'off'
mapping_target_unreferenced_entries = 'To'
#['off','on','on']
#OLD: mapping_keep_all         = ['off','on','on']
#  (ex: ['off','on','on'])

#-------------------------------------------

# 4 -  Drop Ghost
# 		mappings that lead to empty entries
# 		! implicitly : ''
# 		to add: allow to specify missing values
mapping_drop_ghosts 	= 'off'
#['off', 'on','off']

#-------------------------------------------

# 5 -  Remove Duplicates
#       indicate wether if entries with some common values
#       only one needs to be kept     
mapping_remove_duplicates       = 'off'
mapping_target_duplicates_set   = 'From, To, Exposure'
#       if yes: give the set of variables to consider the duplication
#               'ALL' for the comparison to occur for every item in the column

#-------------------------------------------

# 6 - Merge entries
#       activate merging of entries 
mapping_merge_entries       = 'off'
#['off','on','on']
mapping_target_merge_set    = 'From,To'
#       if yes: give the set of variables to consider the duplication
#               'ALL' for the comparison to occur for every item in the column
# (ex: ['off','on','on'])   

#-------------------------------------------

# 7 -  Commands
#       Indicate insctructions when merging entries
#       for each variable in the entries, specify the action among the following
#       '+'     = aggregation
#       'same'  = keep the value if it is the same in both cases
#       'avg'    = computes the average
#       for each cell enter the name and the command
#           if nothing is specified for one cell: defautl command = 'same'

mapping_commands         = 'Exposure : avg'


#-------------------------------------------
# ==========================================
# ==========================================
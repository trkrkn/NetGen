#!/usr/bin/pythonw
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
#  In-file information
# ==========================================

in_file_directory       = 'input/toy_data/'
in_file_name            = ['data_time_1','data_time_2']
in_file_extension       = 'txt'
in_file_delimiter       = ','
#   'on' if entries are quoted:"entry_value"
in_file_quote           = 'off'
in_file_missing_value   = ''


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
out_file_name 		= ['data_time_1res','data_time_2res']
out_file_extension  	= 'txt'
out_file_delimiter 	= ','
out_file_missing_value 	= ''
out_file_single_file   = 'off'
out_file_separate_line = ''
#defining a separation between the results of the datasets
#   'title' will write down the name of the input file
#   '' will not do any separation
#   or write 

# ==========================================
# Mapping information 
# ==========================================

mapping_file_directory      = 'input/toy_data/'
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

#-------------------------------------------

# 2 - Target Position
#       specify if there is only one specific position 
#       in the clean data structure that needs to be mapped
#       if yes: give the names of the column
#       if no: put 'all'
mapping_target_position  = 'all'

#-------------------------------------------

# 3 - Drop Unreferenced Entries
#       'on' if all entries can be keeps
#       'off' if only entries containing ids from the file should be kept
mapping_drop_unreferenced_entries   = 'off'
mapping_target_unreferenced_entries = 'To'

#-------------------------------------------

# 4 -  Drop Ghost
# 		mappings that lead to empty entries

mapping_drop_ghosts 	= 'off'

#-------------------------------------------

# 5 -  Remove Duplicates
#       indicate wether if entries with some common values
#       only one needs to be kept     
mapping_remove_duplicates       = 'off'
mapping_target_duplicates_set   = 'From, To, Exposure'
#       if on: give the set of variables to consider the duplication
#               'ALL' for the comparison to occur for every item in the column

#-------------------------------------------

# 6 - Merge entries
#       activate merging of entries 
mapping_merge_entries       = 'on'
mapping_target_merge_set    = 'From,To'
#       if yes: give the set of variables to consider the duplication
#               'ALL' for the comparison to occur for every item in the column

#-------------------------------------------

# 7 -  Commands
#       Indicate insctructions when merging entries
#       for each variable in the entries, specify the action among the following
#       '+'     = aggregation
#       'same'  = keep the value if it is the same in both cases
#       'avg'    = computes the average
#       for each cell enter the name and the command
#           if nothing is specified for one cell: default command = 'same'

mapping_commands         = 'Exposure : +'

#TO ADD: allow the user to define what the default command should be
#-------------------------------------------
# ==========================================
# ==========================================

#!/usr/bin/pythonw
# -*- coding: utf-8 -*-

# ==========================================
#  In-file information
# ==========================================

in_file_directory 		= 'input/'
in_file_name 			= 'data_test'
# ,'data_time_2']
# (ex: ['data_time_1','data_time_2'])
in_file_format 		    = 'txt'
in_file_delimiter 		= '\t'
#   'on' if entries are quoted:"entry_value"
in_file_quote 			= 'off'
in_file_missing_value 	= ''


# ==========================================
# ==========================================

# ==========================================
# Structure of the raw data
# 	for each cell, 
# 	enter the name and the type
# 	admitted types: str, float, int, date
# ==========================================

raw_data = [		
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
# Structure of the consistent data
# 	for each cell, 
# 	enter the name and the type
# 	admitted types: str, float, int, date
# 	also computations: +,-,*,/,log,exp 
# 	! warning ! 
# 	refer to cells from raw data 
# 		with the correct names given above
# 		explicit values are also admitted
# ==========================================

clean_data = [
                    'From',
                    'str',
                    'To',
                    'str',
                    'Exposure',
                    'float'
 	]

# ==========================================
# ==========================================

# ==========================================
# Out-file information
# ==========================================

out_file_directory 		= 'output/'
out_file_name 			= 'clean_data_time_1'
# (ex: ['clean_data_time_1','clean_data_time_2'])
out_file_format 		= 'txt'
out_file_delimiter 		= '\t'
out_file_missing_value 	= 'NA'

# ==========================================
# Mapping information 
# ==========================================

mapping_file_directory  = 'input/'
mapping_file_name 		= ['mapping','merging']
# (ex: ['mapping', 'merging', 'mapping'])
mapping_file_format 	= 'txt'
mapping_file_delimiter  = ','

#-------------------------------------------
# 1 - Positions
#       (column number) of the id to be kept 
# 	and id to be lost in the mapping file
#       count from 0
mapping_kept_position    = '1'
# (ex: ['1','1','2'])
mapping_lost_position    = '0'
# (ex: ['0','0','1'])
#-------------------------------------------
# 2 - Target Position
#       specify if there is a specific position 
#       in the clean data structure that needs to be mapped
#       if yes: give the position (starting from 0)
#       if no: put 'off'
mapping_target_position  = ['1','off']
# (ex: ['1','off','off'])
#-------------------------------------------
# 3 - Merge lines
mapping_erase_lines      = ['off','on']
# (ex: ['off','on','on'])   
#-------------------------------------------
# 4 - Drop lines
#       'on' if all entries can be keeps
#       'off' if only entries containing ids from the file should be kept
mapping_keep_all         = ['off','on']
#  (ex: ['off','on','on'])
#-------------------------------------------
# 5 -  Commands
#       implicit: from and to are in position 0 and 1
#       specify for each additional entry (position starting form 2) 
#       and how to assemble the pairs
#       '+'     = aggregation
#       'same'  = keep the value if it is the same in both cases
#       'avg'    = computes the average
#       rmq:
#       if one of the entry is empty : output = 'NA'
mapping_commands         = {'2':'+'}
#  (ex: [{'2':'+'},{'2':'+'},{'2':'+'}])
#-------------------------------------------
# 6 -  Drop Ghost
# 		mappings that lead to empty entries
# 		! implicitly : ''
# 		to add: allow to specify missing values
mapping_drop_ghosts 	= ['off', 'on']
#-------------------------------------------
# ==========================================
# ==========================================

# ==========================================
#  Network information
# ==========================================

# networks will be stored in gexf files
# leave everywhere '' if none wanted
net_file_directory 	    	     = ''
net_file_name	    		     = ''

# ==========================================
# ==========================================



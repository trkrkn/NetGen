#!/usr/bin/pythonw
# -*- coding: utf-8 -*-

# ==========================================
#  In-file information
# ==========================================

in_file_directory 		= 'output/10_ff/'
in_file_name 			= ['200203', '200206', '200209', '200212',
                                   '200303', '200306', '200309', '200312',
                                   '200403', '200406', '200409', '200412',
                                   '200503', '200506', '200509', '200512',
                                   '200603', '200606', '200609', '200612',
                                   '200703', '200706', '200709', '200712']
                                   
in_file_format 		        = 'txt'
in_file_delimiter 		= ','
#   'on' if entries are quoted:"entry_value"
in_file_quote 			= 'off'
in_file_missing_value 	        = 'NA'


# ==========================================
# ==========================================

# ==========================================
# Structure of the raw data
# 	for each cell, 
# 	enter the name and the type
# 	admitted types: str, float, int, date
# ==========================================

raw_data = [		
                        'FROM',
			'str',
	    		'TO',
        		'str',
    			'TOTAL_EXPOSURE',
        		'float',
                        'ON_BALANCESHEET',
		       	'float',
		       	'OFF_BALANCESHEET',
		       	'float',
		       	'LOANS',
		       	'float',
                        'DERIVATIVES_EXPOSURE',
		       	'float',
		       	'CREDIT_DERIVATIVES_EXPOSURE',
		      	'float',
                        'DERIVATIVES_AMOUNT_NOMINAL',
		       	'float',
		       	'INTERBANK_LOANS',
		       	'float',
                        'BANK_TYPE',
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
                        'FROM',
			'str',
	    		'TO',
        		'str',
    			'TOTAL_EXPOSURE',
        		'float',
                        'ON_BALANCESHEET',
		       	'float',
		       	'OFF_BALANCESHEET',
		       	'float',
		       	'LOANS',
		       	'float',
                        'DERIVATIVES_EXPOSURE',
		       	'float',
		       	'CREDIT_DERIVATIVES_EXPOSURE',
		      	'float',
                        'DERIVATIVES_AMOUNT_NOMINAL',
		       	'float',
		       	'INTERBANK_LOANS',
		       	'float',
                        'BANK_TYPE',
                        'str'
		       	]

# ==========================================
# ==========================================

# ==========================================
# Out-file information
# ==========================================

out_file_directory 		= 'output/11_ff_bista/'
out_file_name 			= ['200203', '200206', '200209', '200212',
                                   '200303', '200306', '200309', '200312',
                                   '200403', '200406', '200409', '200412',
                                   '200503', '200506', '200509', '200512',
                                   '200603', '200606', '200609', '200612',
                                   '200703', '200706', '200709', '200712']

out_file_format 		= 'txt'
out_file_delimiter 		= ','
out_file_missing_value 	        = ''

# ==========================================
# Mapping information 
# ==========================================

mapping_file_directory          = 'input/lists/'
#['input/maps/nehmer_geber/','input/maps/mergers/','input/maps/geber_kne/']
mapping_file_name 		= 'list_BISTA_geber_KNEs'
mapping_file_format 	        = 'txt'
mapping_file_delimiter          = ','

#-------------------------------------------
# 1 - Positions
#       (column number) of the id to be kept 
# 	and id to be lost in the mapping file
#       count from 0
mapping_kept_position    = '0'
# (ex: ['1','1','2'])
mapping_lost_position    = '0'
# (ex: ['0','0','1'])
#-------------------------------------------
# 2 - Target Position
#       specify if there is a specific position 
#       in the clean data structure that needs to be mapped
#       if yes: give the position (starting from 0)
#       if no: put 'off'
mapping_target_position  = 'off'
# (ex: ['1','off','off'])
#-------------------------------------------
# 3 - Merge lines
mapping_erase_lines      = 'off'
#['off','on','on']
# (ex: ['off','on','on'])   
#-------------------------------------------
# 4 - Drop lines
#       'on' if all entries can be keeps
#       'off' if only entries containing ids from the file should be kept
mapping_keep_all         = 'off'
#['off','on','on']
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
mapping_commands         = {'2':'+','3':'+','4':'+','5':'+','6':'+','7':'+','8':'+','9':'+','10':'same'}
#  (ex: [{'2':'+'},{'2':'+'},{'2':'+'}])
#-------------------------------------------
# 6 -  Drop Ghost
# 		mappings that lead to empty entries
# 		! implicitly : ''
# 		to add: allow to specify missing values
mapping_drop_ghosts 	= 'off'
#['off', 'on','off']
#-------------------------------------------
# 7 -  Remove Duplicates
mapping_remove_duplicates = 'off'
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



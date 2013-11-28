#!/usr/bin/pythonw
# -*- coding: utf-8 -*-

# ==========================================
#  In-file information
# ==========================================

in_file_directory 		= 'input/raw/20_2008-2012_exposures/'
in_file_name 			= ['Betragsdaten-GN-Direktkredite_032008', 'Betragsdaten-GN-Direktkredite_062008', 'Betragsdaten-GN-Direktkredite_092008', 'Betragsdaten-GN-Direktkredite_122008',
                                   'Betragsdaten-GN-Direktkredite_032009', 'Betragsdaten-GN-Direktkredite_062009', 'Betragsdaten-GN-Direktkredite_092009', 'Betragsdaten-GN-Direktkredite_122009',
                                   'Betragsdaten-GN-Direktkredite_032010', 'Betragsdaten-GN-Direktkredite_062010', 'Betragsdaten-GN-Direktkredite_092010', 'Betragsdaten-GN-Direktkredite_122010',
                                   'Betragsdaten-GN-Direktkredite_032011', 'Betragsdaten-GN-Direktkredite_062011', 'Betragsdaten-GN-Direktkredite_092011', 'Betragsdaten-GN-Direktkredite_122011',
                                   'Betragsdaten-GN-Direktkredite_032012', 'Betragsdaten-GN-Direktkredite_062012', 'Betragsdaten-GN-Direktkredite_092012']
                                   
in_file_format 		        = 'txt'
in_file_delimiter 		= '	'
#   'on' if entries are quoted:"entry_value"
in_file_quote 			= 'on'
in_file_missing_value 	        = 'NA'


# ==========================================
# ==========================================

# ==========================================
# Structure of the raw data
# 	for each cell, 
# 	enter the name and the type
# 	admitted types: str, float, int, date
# ==========================================

raw_data =	       ['FROM',
			'str',
	    		'TO',
        		'str',
		        'Guarantor',
	    		'str',
    			'Credit_type',
	    		'int',
    			'TOTAL_EXPOSURE',
        		'float',
		      	'LOANS',
		       	'float',
		       	'Wohnwirtschaftliche_realkredite',
		       	'float',
		       	'EWB',
		       	'float',
		       	'RWA',
		      	'float',
		       	'ON_BALANCESHEET',
		       	'float',
		       	'OFF_BALANCESHEET',
		       	'float',
		       	'Bürgschaften_und_garantien',
		       	'float',
		       	'DERIVATIVES_EXPOSURE',
		       	'float',
		       	'CREDIT_DERIVATIVES_EXPOSURE_ASHOLDER',
		       	'float',
		       	'CREDIT_DERIVATIVES_EXPOSURE_ASUNDERWRITER',
		       	'float',
		       	'SUM_LOAN_SECURITIES',
		       	'float',
		       	'Verwendeter Ansatz',
		       	'str',
		       	'RISK_EVALUATION_INTERNAL',
		       	'int',
		       	'PROB_DEFAULT',
		       	'float',
		       	'IRBA_INSTITUTE',
		       	'int']
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

clean_data =            ['FROM',
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
                        'RWA',
		      	'float',
		       	'CREDIT_DERIVATIVES_EXPOSURE_ASHOLDER',
		       	'float',
		       	'CREDIT_DERIVATIVES_EXPOSURE_ASUNDERWRITER',
		       	'float',
                        'SUM_LOAN_SECURITIES',
		       	'float',
		       	'RISK_EVALUATION_INTERNAL',
		       	'int',
		       	'PROB_DEFAULT',
		       	'float',
                        'IRBA_INSTITUTE',
		       	'int']

# ==========================================
# ==========================================

# ==========================================
# Out-file information
# ==========================================

out_file_directory 		= 'output/20_fb/'
out_file_name 			= ['200803', '200806', '200809', '200812',
                                    '200903', '200906', '200909', '200912',
                                    '201003', '201006', '201009', '201012',
                                    '201103', '201106', '201109', '201112',
                                    '201203', '201206', '201209']
out_file_format 		= 'txt'
out_file_delimiter 		= ','
out_file_missing_value 	        = ''

# ==========================================
# Mapping information 
# ==========================================

mapping_file_directory          = ['input/maps/nehmer_geber/','input/maps/mergers/','input/maps/geber_kne/']
mapping_file_name 		= [[ 'nehmer_geber_200803', 'nehmer_geber_200806', 'nehmer_geber_200809', 'nehmer_geber_200812',
                                     'nehmer_geber_200903', 'nehmer_geber_200906', 'nehmer_geber_200909', 'nehmer_geber_200912',
                                     'nehmer_geber_201003', 'nehmer_geber_201006', 'nehmer_geber_201009', 'nehmer_geber_201012',
                                     'nehmer_geber_201103', 'nehmer_geber_201106', 'nehmer_geber_201109', 'nehmer_geber_201112',
                                     'nehmer_geber_201203', 'nehmer_geber_201206', 'nehmer_geber_201209'],

                                   [ 'geberOld_geberNew_200803', 'geberOld_geberNew_200806', 'geberOld_geberNew_200809', 'geberOld_geberNew_200812',
                                     'geberOld_geberNew_200903', 'geberOld_geberNew_200906', 'geberOld_geberNew_200909', 'geberOld_geberNew_200912',
                                     'geberOld_geberNew_201003', 'geberOld_geberNew_201006', 'geberOld_geberNew_201009', 'geberOld_geberNew_201012',
                                     'geberOld_geberNew_201103', 'geberOld_geberNew_201106', 'geberOld_geberNew_201109', 'geberOld_geberNew_201112',
                                     'geberOld_geberNew_201203', 'geberOld_geberNew_201206', 'geberOld_geberNew_201209'],

                                   'geber_kne_201209']

mapping_file_format 	        = 'txt'
mapping_file_delimiter          = ','

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
mapping_target_position  = 'off'
# (ex: ['1','off','off'])
#-------------------------------------------
# 3 - Merge lines
mapping_erase_lines      = ['off','on','on']
# (ex: ['off','on','on'])   
#-------------------------------------------
# 4 - Drop lines
#       'on' if all entries can be keeps
#       'off' if only entries containing ids from the file should be kept
mapping_keep_all         = ['off','on','on']
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
mapping_commands         =  {'2':'+','3':'+','4':'+','5':'+','6':'+','7':'+','8':'+','9':'+','10':'+','11':'same','12':'avg','13':'same'}
#-------------------------------------------
# 6 -  Drop Ghost
# 		mappings that lead to empty entries
# 		! implicitly : ''
# 		to add: allow to specify missing values
mapping_drop_ghosts 	= ['off', 'on','off']
#-------------------------------------------
# 7 -  Remove Duplicates
mapping_remove_duplicates = 'on'
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



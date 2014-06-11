#!/usr/bin/pythonw
# -*- coding: utf-8 -*-


# ==========================================
#  In-file information
# ==========================================

# leave '0' if no file
in_file_number 		= '1'
in_file_directory 		= 'resource/single_file/derivatives/merged_derivatives/'
in_file_name 			= ['infile_test']
in_file_format 		= 'txt'
in_file_delimiter 		= ','
#'on' if entries are quoted:"entry_value"
in_file_quote 			= 'off'

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
                    'Derivative',
                    'float'
	]
##			'FROM',
##			'str',
##	    		'TO',
##        		'str',
##		        'Guarantor',
##	    		'str',
##    			'Credit_type',
##	    		'int',
##    			'Total_bilateral_exposure',
##        		'float',
##		      	'Realkredite',
##		       	'str',
##		       	'Wohnwirtschaftliche_realkredite',
##		       	'str',
##		       	'EWB',
##		       	'str',
##		       	'RWA',
##		      	 'str',
##		       	'Bilanzielle_kreditforderungen',
##		       	'str',
##		       	'Andere_außerbilanzielle_geschäfte',
##		       	'str',
##		       	'Bürgschaften_und_garantien',
##		       	'str',
##		       	'Derivative',
##		       	'float',
##		       	'Exposure_aus_kreditderivaten_als_sicherungsnehmer',
##		       	'str',
##		       	'Exposure aus Kreditderivaten als Sicherungsgeber',
##		       	'str',
##		       	'Summe der bewerteten Sicherheiten',
##		       	'str',
##		       	'Verwendeter Ansatz',
##		       	'str',
##		       	'Ausfallkennzeichen',
##		       	'str',
##		       	'PD',
##		       	'str',
##		       	'IRBA-Instituut',
##		       	'int'
##		       	]

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

consistent_data=[
##                    'FROM',
##                    'str',
##                    'TO',
##                    'str',
##                    'Total_bilateral_exposure',
##                    'float',
##                    'Derivative',
##                    'float'
##	]
                    'FROM',
                    'str',
                    'TO',
                    'str',
                    'Derivative',
                    'float'
	]
# ==========================================
# ==========================================

# ==========================================
# Out-file information
# ==========================================

out_file_directory 	= 'resource/single_file/results/'
out_file_name 		= ['blablabla']
out_file_format 	= 'txt'
out_file_delimiter 	= ','

# ==========================================
# Mapping information
# ==========================================

mapping_file_number      ='0'
mapping_file_directory   = ''
#'resource/single_file/suppl_info/'
mapping_file_name 	     = ['']
#'blablabla'
mapping_file_format 	= 'txt'
mapping_file_delimiter   = ','
# positions (column number) of the id to be kept 
# 	and id to be lost in the mapping file
# count from 0
kept_position            = '1'
lost_position            = '0'

# ==========================================
# ==========================================

# ==========================================
# Merging information
# ==========================================

merger_file_number      = '0'
merger_file_directory    = 'resource/single_file/suppl_info/'
merger_file_name         = ['blablabla']
merger_file_format       = 'txt'
merger_file_delimiter 	= ','
# position of the active and passive actors in the merging file
# count from 0
active_position          = '2'
passive_position         = '1'
# implicit: from and to are in position 0 and 1
# specify for each additional entry (position starting form 2) 
#  and how to assemble the pairs
# '+'     = aggregation
# 'same'  = keep the value if it is the same in both cases
# 'avg'    = computes the average
merger_commands         = {'2':'+','3':'same',}
# !!! if on of the entry is empty : output = 'n.g.'

# ==========================================
# ==========================================

# ==========================================
#  Network information
# ==========================================

# networks will be stored in gexf files
# leave everywhere '' if none wanted
net_file_directory 	    	     = 'resource/single_file/results/networks/gexf_files/'
net_file_name	    		     = 'blabla'
# to directly launch network analysis
# will store file with global characteristics
# 	of the network
# leave everywhere '' if none wanted
net_analysis_file_directory 	= ''
net_analysis_file_name 		= ''
net_analysis_file_format	     = ''
net_analysis_file_delimiter 	= ''

# ==========================================
# ==========================================

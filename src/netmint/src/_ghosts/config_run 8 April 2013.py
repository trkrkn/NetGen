#!/usr/bin/pythonw
# -*- coding: utf-8 -*-


# ==========================================
#  In-file information
# ==========================================

# leave '0' if no file
in_file_number 		= '19'
in_file_directory 		= 'resource/raw_mapped/'
in_file_name 			= ['Betragsdaten-GN-Direktkredite_032008_mapped', 'Betragsdaten-GN-Direktkredite_062008_mapped', 'Betragsdaten-GN-Direktkredite_092008_mapped', 'Betragsdaten-GN-Direktkredite_122008_mapped', 'Betragsdaten-GN-Direktkredite_032009_mapped', 'Betragsdaten-GN-Direktkredite_062009_mapped', 'Betragsdaten-GN-Direktkredite_092009_mapped', 'Betragsdaten-GN-Direktkredite_122009_mapped', 'Betragsdaten-GN-Direktkredite_032010_mapped', 'Betragsdaten-GN-Direktkredite_062010_mapped', 'Betragsdaten-GN-Direktkredite_092010_mapped', 'Betragsdaten-GN-Direktkredite_122010_mapped', 'Betragsdaten-GN-Direktkredite_032011_mapped', 'Betragsdaten-GN-Direktkredite_062011_mapped', 'Betragsdaten-GN-Direktkredite_092011_mapped', 'Betragsdaten-GN-Direktkredite_122011_mapped', 'Betragsdaten-GN-Direktkredite_032012_mapped', 'Betragsdaten-GN-Direktkredite_062012_mapped', 'Betragsdaten-GN-Direktkredite_092012_mapped']
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
		        'Guarantor',
	    		'str',
    			'Credit_type',
	    		'int',
    			'Total_bilateral_exposure',
        		'float',
		      	'Realkredite',
		       	'str',
		       	'Wohnwirtschaftliche_realkredite',
		       	'str',
		       	'EWB',
		       	'str',
		       	'RWA',
		      	 'str',
		       	'Bilanzielle_kreditforderungen',
		       	'str',
		       	'Andere_außerbilanzielle_geschäfte',
		       	'str',
		       	'Bürgschaften_und_garantien',
		       	'str',
		       	'Derivative',
		       	'float',
		       	'Exposure_aus_kreditderivaten_als_sicherungsnehmer',
		       	'str',
		       	'Exposure aus Kreditderivaten als Sicherungsgeber',
		       	'str',
		       	'Summe der bewerteten Sicherheiten',
		       	'str',
		       	'Verwendeter Ansatz',
		       	'str',
		       	'Ausfallkennzeichen',
		       	'int',
		       	'PD',
		       	'float',
		       	'IRBA-Instituut',
		       	'int'
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

consistent_data=[
                    'FROM',
                    'str',
                    'TO',
                    'str',
                    'Total_bilateral_exposure',
                    'float',
                    'Ausfallkennzeichen',
		    'int',
                    'PD',
		    'float',
	]
# ==========================================
# ==========================================

# ==========================================
# Out-file information
# ==========================================

out_file_directory 	= 'resource/results/'
out_file_name 		= ['mapped_merged_200803', 'mapped_merged_200806', 'mapped_merged_200809', 'mapped_merged_200812', 'mapped_merged_200903', 'mapped_merged_200906', 'mapped_merged_200909', 'mapped_merged_200912', 'mapped_merged_201003', 'mapped_merged_201006', 'mapped_merged_201009', 'mapped_merged_201012', 'mapped_merged_201103', 'mapped_merged_201106', 'mapped_merged_201109', 'mapped_merged_201112', 'mapped_merged_201203', 'mapped_merged_201206', 'mapped_merged_201209']
out_file_format 	= 'txt'
out_file_delimiter 	= ','

# ==========================================
# Mapping information (can use one file per input file)
# ==========================================

mapping_file_number      ='19'
mapping_file_directory   = 'resource/suppl_info/'
#'resource/single_file/suppl_info/'
mapping_file_name 	     = ['new_scheme_200803', 'new_scheme_200806', 'new_scheme_200809', 'new_scheme_200812', 'new_scheme_200903', 'new_scheme_200906', 'new_scheme_200909', 'new_scheme_200912', 'new_scheme_201003', 'new_scheme_201006', 'new_scheme_201009', 'new_scheme_201012', 'new_scheme_201103', 'new_scheme_201106', 'new_scheme_201109', 'new_scheme_201112', 'new_scheme_201203', 'new_scheme_201206', 'new_scheme_201209']
#'blablabla'
mapping_file_format 	= 'txt'
mapping_file_delimiter   = ','
# positions (column number) of the id to be kept 
# 	and id to be lost in the mapping file
# count from 0
kept_position            = '1'
lost_position            = '0'
# 'on' if all entries can be keps
# 'off' if only entries containing ids from the file should be kept
mapping_keep_all        = 'on'

# ==========================================
# ==========================================

# ==========================================
# Merging information
# ==========================================

merger_file_number      = '1'
merger_file_directory    = 'resource/suppl_info/'
merger_file_name         = ['Fusionen_all']
merger_file_format       = 'txt'
merger_file_delimiter 	= ','
# position of the active and passive actors in the merging file
# count from 0
active_position          = '0'  # Keep
passive_position         = '1'  # Overwrite
# implicit: from and to are in position 0 and 1
# specify for each additional entry (position starting form 2) 
#  and how to assemble the pairs
# '+'     = aggregation
# 'same'  = keep the value if it is the same in both cases
# 'avg'    = computes the average
merger_commands         = {'2':'+','3':'same','4':'avg'}
# !!! if on of the entry is empty : output = 'n.g.'

# ==========================================
# ==========================================

# ==========================================
#  Network information
# ==========================================

# networks will be stored in gexf files
# leave everywhere '' if none wanted
net_file_directory 	    	     = ''
net_file_name	    		     = ''
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

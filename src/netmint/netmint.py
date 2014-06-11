#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ==========================================
#   Libraries and Packages
import sys
import os
import src.config     as config
from src.analyzer     import Analyzer
# from src.file_handler import FileHandler
from datetime         import datetime
# import package.networkx as nx
# ==========================================

print ("\n\n--------------------------------------------------------")
print ("\n\n     		NetMINT Light 1.0  		     		     		     		     		")
print ("\n\n--------------------------------------------------------\n\n")


# -------------------------------------------------------------
# 
#  stop_system (message)
# 
# -------------------------------------------------------------

    # def write_file(self,name,data):
        # print 'tchek'

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

def write_file (directory, name, data):
        # print data
        file = open (directory+'/'+name+'.csv','w')
        for elem in data:
            if isinstance (elem, list):
                if any(isinstance(l, list) for l in elem):
                    for l in elem:
                        string = ','.join(str(e) for e in l)
                        file.write(string + '\n')
                else:
                    string = ','.join(str(e) for e in elem)
                    file.write(string+'\n')
            else:
                file.write(str(elem)+'\n')
            # file.write('\n\n')
        file.close()

#-------------------------------------------------------------------------
#
#  MAIN
#
#-------------------------------------------------------------------------

if __name__ == '__main__':
        
        #####################################
        # Importing information from config #
        #####################################

        file_info                   = [config.in_file_directory, config.in_file_name, 
                                        config.out_file_directory,
                                        config.is_weighted, config.is_directed, config.full_analysis, config.weight_id, config.aggregate_number
                                    ]

        n_in_files = 0
        if file_info[1] ==  'all':
            directory_folder    = os.getcwd()+'/'
            file_info[1]        = [name.replace('.gexf') for name in os.listdir(directory_folder+file_info[0]) if '.gexf' in name]
            
        if isinstance(file_info[1], str):
            n_in_files = 1
        else:
            if isinstance(file_info[1], list):
                    n_in_files = len(file_info[1])
        print ('number of in files : {0}\n'.format(n_in_files))

        log_text    = ''

        results_all =[]
        results_all.append('')

        ##################
        # Launch process #
        ##################

        # for each file in the in_file_name list from config
        for i in range(n_in_files) :

            ##############################
            # Get the proper information #
            ##############################
            # in file
            in_file_directory   = get_entry_str(file_info [0], i, 0)
            in_file_name        = get_entry_str(file_info [1], i, 0)
            # out file
            out_file_directory  = get_entry_str(file_info [2], i, 0)
            # network
            is_weighted         = get_entry_str(file_info[3], i, 0)
            is_directed         = get_entry_str(file_info[4], i, 0)
            full_analysis       = get_entry_str(file_info[5], i, 0)
            weight_id           = get_entry_str(file_info[6], i, 0)
            aggregate_number    = get_entry_str(file_info[7], i, 0)

            start       = datetime.now()

            print ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            print ("     Opening data file : {0}".format(in_file_directory + in_file_name))
            print ("   - Started: " + str(start))
            print ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")
            log_text += "\n\n     -DATA FILE : {0} at {1}".format(in_file_directory + in_file_name, str(start))+'\n'

            ########################
            # Generate the network #
            ########################

            print ("Step 0. INITIALIZATION\n")

            # initialization - generating an Analyzer with all info to generate file handlers
            _Analyzer = Analyzer(in_file_directory, in_file_name,
                                  out_file_directory,
                                  is_weighted, is_directed, full_analysis, weight_id, aggregate_number
                                )

            _Analyzer.generate_network()

            ########################
            # Launch the analysis  #
            ########################

            print ("Step 1. ANALYSIS\n")


            _Analyzer.launch_analysis()


            ########################
            # Save the analysis  #
            ########################

            print ("Step 2. SAVE ANALYSIS\n")

            # _Analyzer.save_analysis()
            
            network_result = _Analyzer.import_results()
            line = [in_file_name]
            line.extend(network_result)
            results_all.append(line)

            finish = datetime.now()
            
            print ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
            print ("   - Finished: " + str(finish))
            print ("    >> Total time elapsed: "+str(finish-start))
            print ("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\n")

            log_text += 'Finished at: {0}\n'.format(str(finish))

        
        results_all [0] = _Analyzer.analyzed_feat
        write_file(config.out_file_directory,  "network_analysis", results_all)

        print ("\n\n--------------------------------------------------------")
        print ("\n\n            Process Terminated")
        print ("\n\n--------------------------------------------------------\n\n")
        
        file = open ('log/netmint_log.txt','w')
        file.write(log_text)
        file.close()


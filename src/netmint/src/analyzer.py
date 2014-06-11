#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ==========================================
#   Libraries and Packages
from src.network_handler        import NetworkHandler
#import os
# ==========================================

class Analyzer:

        # -------------------------------------------------------------
        # 
        #  __init__ (in_file_directory, in_file_name, 
        #                out_file_directory, 
        #                is_weighted, is_directed, full_analysis) 
        # 
        # -------------------------------------------------------------

        def __init__(self, in_file_directory, in_file_name, 
                        out_file_directory, 
                        is_weighted, is_directed, full_analysis, weight_id, aggregate_number):

                self.in_file_directory  = in_file_directory
                self.in_file_name       = in_file_name
                self.out_file_directory = out_file_directory

                self.aggregate_number   = int(aggregate_number)

                self.RESULTS            = []
                self.analyzed_feat      = 'period'

                if is_weighted == 'yes':
                    self.is_weighted    = True
                    self.weight_id      = weight_id
                else:
                    self.is_weighted    = False
                    self.weight_id      = 0

                if is_directed == 'yes':
                    self.is_directed = True
                else :
                    self.is_directed = False

                if full_analysis == 'yes':
                    self.full_analysis = True
                else: 
                    self.full_analysis = False

        # -------------------------------------------------------------
        # -------------------------------------------------------------

        def generate_network(self):

            self.network_handler = NetworkHandler (self.in_file_directory, 
                                                   self.in_file_name, self.weight_id, 
                                                   self.aggregate_number)

        # -------------------------------------------------------------
        # -------------------------------------------------------------

        def launch_analysis(self):

            self.distributions = []
            
            [analysis, txt] = self.network_handler.set_general_values()
            self.RESULTS.extend(analysis)
            self.analyzed_feat += txt

            [analysis, txt] = self.network_handler.set_degree_analysis()
            self.RESULTS.extend(analysis)
            self.analyzed_feat += txt
            
            [analysis, txt] = self.network_handler.set_volume_distribution()
            self.RESULTS.extend(analysis)
            self.analyzed_feat += txt            

            [analysis, txt] = self.network_handler.set_clustering_distribution()
            self.RESULTS.extend(analysis)
            self.analyzed_feat += txt

            [analysis, txt] = self.network_handler.centrality_measures()
            self.RESULTS.extend(analysis)
            self.analyzed_feat += txt

            [analysis, txt] = self.network_handler.transversal_measures()
            self.RESULTS.extend(analysis)
            self.analyzed_feat += txt

            [analysis, txt] = self.network_handler.scc_analysis()
            self.RESULTS.extend(analysis)
            self.analyzed_feat += txt
            
            self.network_handler.save_extra()


        # -------------------------------------------------------------
        # -------------------------------------------------------------

        
        def import_results(self):
            return self.RESULTS

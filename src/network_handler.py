#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ==========================================
#   Libraries and Packages
import networkx as nx
# ==========================================

class NetworkHandler:

	# -------------------------------------------------------------
    # 
    #  init (directory, name)
    # 
    # -------------------------------------------------------------

    def __init__(self, directory, name):

    	self.name 				= name
    	self.save_directory                     = directory 
    	self.G 					= nx.DiGraph()

    # -------------------------------------------------------------
    # 
    #  generate_network (data)
    # 
    # -------------------------------------------------------------

    def generate_network(self, data):

        for entry in data:
                features = {}
                for i in range (len(entry)-2):
                        features[str(2+i)] = entry[2+i]
                        self.G.add_edge(entry[0],entry[1],features)

    # -------------------------------------------------------------
    # 
    #  save_network ()
    # 
    # -------------------------------------------------------------

    def save_network(self):

    	nx.write_gexf(self.G, self.save_directory + self.name + '.gexf')


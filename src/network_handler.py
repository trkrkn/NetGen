#!/usr/bin/env python
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
#   Libraries and Packages
import networkx as nx
# ==========================================

class NetworkHandler:

	# -------------------------------------------------------------
    # 
    #  init (directory, name)
    # 
    # -------------------------------------------------------------

    # def __init__(self, directory, name):
    def __init__ (self, directory, name, 
                    list_edges, out_node, in_node, 
                    is_directed, is_weighted, edge_weight):

        if is_directed == 'on': 
    	   self.G  = nx.DiGraph()
        else:
            self.G = nx.Graph()

        self.directory      = directory
        self.name           = name
        self.list_edges     = list_edges
        self.out_node_index = out_node
        self.in_node_index  = in_node
        self.is_weighted    = is_weighted
        self.edge_weight    = edge_weight

        self.generate_network()
        self.save_network()

    # -------------------------------------------------------------
    # 
    #  generate_network (data)
    # 
    # -------------------------------------------------------------

    def generate_network(self):

        if self.is_weighted ==  'on':
            for edge in self.list_edges:
                weight = edge[self.edge_weight]
                try :
                    weight = float(weight)
                except:
                    weight = 0.0

                self.G.add_edge(edge[self.out_node_index], edge[self.in_node_index],{'weight':weight})
        else:
            for edge in self.list_edges:
                self.G.add_edge(edge[self.out_node_index], edge[self.in_node_index])            

    # -------------------------------------------------------------
    # 
    #  save_network ()
    # 
    # -------------------------------------------------------------

    def save_network(self):

    	nx.write_gexf(self.G, self.directory + self.name + '.gexf')


#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ==========================================
#   Libraries and Packages
import networkx as nx
from src.stat_handler import StatsHandler
# ==========================================

class NetworkHandler:

	# -------------------------------------------------------------
    # 
    #  init (directory, name, weight_id, aggregate_number)
    # 
    # -------------------------------------------------------------

    def __init__(self, directory, name, weight_id, aggregate_number):

    	self.name 				= name
    	self.directory          = directory 
    	self.G 					= nx.read_gexf(self.directory+self.name+'.gexf')
        self.weight_id          = weight_id
        self.features           = []
        self.aggregate_number   = aggregate_number
        self.Stats              = StatsHandler(name)

    # -------------------------------------------------------------
    # 
    #  set_general_values()
    # 
    # -------------------------------------------------------------

    def set_general_values(self):

        general_values = []
        general_values.append("general values:")

        # size 
        general_values.append(len(self.G.nodes()))

        # edges
        general_values.append(len(self.G.edges()))

        # total volume
        total_volume = 0.0
        for edge in self.G.edges(data = True):
                total_volume += edge[2][self.weight_id]
        general_values.append(total_volume)

        # nb lenders
        nb_lenders  = 0
        out_deg     = self.G.out_degree()
        for deg in out_deg.values():
            if deg > 0:
                nb_lenders += 1
        general_values.append(nb_lenders)

        # nb borrowers
        nb_borrowers    = 0
        in_deg          = self.G.in_degree()
        for deg in in_deg.values():
            if deg > 0:
                nb_borrowers += 1
        general_values.append(nb_borrowers)

        # avg degree
        deg = self.G.degree()
        general_values.append(float(sum(deg.values()))/len(deg))

        # print general_values
        self.features.append(general_values)

    # -------------------------------------------------------------
    # 
    # set_degree_distribution
    #               computes cumulative distribution for 
    #                           all - in - out 
    #                                   and
    #               computes correlation between in and out
    # 
    # -------------------------------------------------------------

    def set_degree_analysis(self):

        # for KS statistical test
        # to verify
        continuous = False

        degree_distributions = []
        degree_distributions.append("degree distribution")
        # total degree
        title = "total degree"
        degree_distributions.append(title)

        self.degree_distribution                = self.G.degree()

        [degree_cumulative_distribution_agg,
                  degree_distribution_agg_sd]   = self.Stats.analyze_distribution(self.degree_distribution, self.aggregate_number, continuous, title)

        # #       - compute cdf for real data
        # degree_cumulative_distribution          = self.Stats.get_cumulative_distribution(self.degree_distribution)
        # #       - compute aggregated values
        # [degree_distribution_agg, 
        #         degree_distribution_agg_sd]     = self.Stats.aggregate_distribution(self.degree_distribution, self.aggregate_number, True)
        # #       - compute cdf for aggregated
        # degree_cumulative_distribution_agg      = self.Stats.get_cumulative_distribution(degree_distribution_agg)

        # #       - store sd from aggregated to real data
        degree_distributions.append("standard error")
        degree_distributions.append(degree_distribution_agg_sd)
        #       - store cdf aggregated
        degree_distributions.append("aggregated cdf")
        degree_distributions.append(degree_cumulative_distribution_agg)
        # #       - computing the Kolmogorov-Smirnov test
        # self.Stats.kolmogorov_smirnov(degree_cumulative_distribution[0], 
        #                                 degree_cumulative_distribution_agg[0], continuous)

        # # # in degree
        # degree_distributions.append("\nin degree:")

        # self.in_degree_distribution                 = self.G.in_degree()
        # in_degree_cumulative_distribution           = self.Stats.get_cumulative_distribution(self.in_degree_distribution, 0)
        # in_degree_cumulative_distribution_agg       = self.Stats.get_cumulative_distribution(self.in_degree_distribution, self.aggregate_number)
        # degree_distributions.append(in_degree_cumulative_distribution_agg)
        # #       - computing the Kolmogorov-Smirnov test
        # self.Stats.kolmogorov_smirnov(in_degree_cumulative_distribution[0], 
        #                                 in_degree_cumulative_distribution_agg[0], continuous)

        # # out degree
        # degree_distributions.append("\nout degree:")

        # self.out_degree_distribution            = self.G.out_degree()
        # out_degree_cumulative_distribution      = self.Stats.get_cumulative_distribution(self.out_degree_distribution, 0)
        # out_degree_cumulative_distribution_agg  = self.Stats.get_cumulative_distribution(self.out_degree_distribution, self.aggregate_number)
        # degree_distributions.append(out_degree_cumulative_distribution_agg)
        # # #       - computing the Kolmogorov-Smirnov test
        # self.Stats.kolmogorov_smirnov(out_degree_cumulative_distribution[0], 
        #                                 out_degree_cumulative_distribution_agg[0], continuous)

        # # correlation
        # degree_distributions.append("\nin out correlation:")
        # #       - dependency
        # keys        = self.G.nodes()
        # d_in_d_out  = []
        # for key in keys:
        #     d_in_d_out.append([self.in_degree_distribution[key],self.out_degree_distribution[key]])
        # deg_in_deg_out_dependency = self.Stats.get_dependency(d_in_d_out)
        # #         - getting the aggregate dependency
        # deg_in_deg_out_dependency_agg = self.Stats.aggregate_distribution(deg_in_deg_out_dependency, self.aggregate_number)
        # degree_distributions.append(deg_in_deg_out_dependency_agg)
        # #         - adding the sd of the real distribution after dependency computation
        # degree_distributions.append(deg_in_deg_out_dependency[2])
        # #        - computing the Kolmogorov-Smirnov test
        # self.Stats.kolmogorov_smirnov(deg_in_deg_out_dependency[1], deg_in_deg_out_dependency_agg[1], continuous)
        # # #       - r_square 
        # self.Stats.r_square([x[0] for x in d_in_d_out],[x[1] for x in d_in_d_out])

        # STORING RESULTS
        self.features.append(degree_distributions)

    # -------------------------------------------------------------
    # 
    # set_volume_distribution()
    # 
    # -------------------------------------------------------------

    def set_volume_distribution(self):

        # for KS statistical test
        continuous = True

        volume_distributions    = []
        volume_distributions.append("volume distribution")

        # total volume
        volume_distributions.append("\nvolume total:")
        self.volume_distribution  = dict()
        for node in self.G.nodes():
                volume = 0.0
                for edge in self.G.edges(data = True):
                        if node in edge[1] or node in edge[0]:
                                volume += edge [2][self.weight_id]
                self.volume_distribution[node] = volume
        volume_cumulative_distribution      = self.Stats.get_cumulative_distribution(self.volume_distribution, 0)      
        volume_cumulative_distribution_agg  = self.Stats.get_cumulative_distribution(self.volume_distribution, self.aggregate_number)
        volume_distributions.append(volume_cumulative_distribution_agg)
        #       - computing the KS test      
        # volume_cumulative_distribution_agg_ks = 
        self.Stats.kolmogorov_smirnov(volume_cumulative_distribution[0], 
                                        volume_cumulative_distribution_agg[0], continuous)
        # volume_distributions.append(volume_cumulative_distribution_agg_ks)


        # in volume
        volume_distributions.append("\nin total:")
        self.in_volume_distribution  = dict()
        for node in self.G.nodes():
                volume = 0.0
                for edge in self.G.edges(data = True):
                        if node in edge[1]:
                                volume += edge [2][self.weight_id]
                self.in_volume_distribution[node] = volume
        in_volume_cumulative_distribution       = self.Stats.get_cumulative_distribution(self.in_volume_distribution, 0)
        in_volume_cumulative_distribution_agg   = self.Stats.get_cumulative_distribution(self.in_volume_distribution, self.aggregate_number)
        volume_distributions.append(in_volume_cumulative_distribution_agg)
        #       - computing the KS test
        # in_volume_cumulative_distribution_agg_ks = 
        self.Stats.kolmogorov_smirnov(in_volume_cumulative_distribution[0],
                                        in_volume_cumulative_distribution_agg[0], continuous)
        # volume_distributions.append(in_volume_cumulative_distribution_agg_ks)

        # out volume
        volume_distributions.append("\nout total:")
        self.out_volume_distribution  = dict()
        for node in self.G.nodes():
                volume = 0.0
                for edge in self.G.edges(data = True):
                        if node in edge[0]:
                                volume += edge [2][self.weight_id]
                self.out_volume_distribution[node] = volume
        out_volume_cumulative_distribution          = self.Stats.get_cumulative_distribution(self.out_volume_distribution, 0)
        out_volume_cumulative_distribution_agg      = self.Stats.get_cumulative_distribution(self.out_volume_distribution, self.aggregate_number)
        volume_distributions.append(out_volume_cumulative_distribution_agg)
        #       - computing the KS test
        # out_volume_cumulative_distribution_agg_ks   = 
        self.Stats.kolmogorov_smirnov(out_volume_cumulative_distribution[0],
                                        out_volume_cumulative_distribution_agg[0], continuous)
        # volume_distributions.append(out_volume_cumulative_distribution_agg_ks)

        # correlation
        volume_distributions.append("\nin out correlation:")

        # dependency
        keys = self.G.nodes()
        v_in_v_out = []
        for key in keys:
            v_in_v_out.append([self.in_volume_distribution[key],self.out_volume_distribution[key]])
        vol_in_vol_out_dependency = self.Stats.get_dependency(v_in_v_out)
        #       - getting the aggregate dependency
        vol_in_vol_out_dependency_agg = self.Stats.aggregate_distribution(vol_in_vol_out_dependency, self.aggregate_number)
        volume_distributions.append(vol_in_vol_out_dependency_agg)
        #       - adding the sd of the real distribution
        volume_distributions.append(vol_in_vol_out_dependency[2])
        #       - computing the KS test
        # vol_in_vol_out_ks = 
        self.Stats.kolmogorov_smirnov(vol_in_vol_out_dependency[1], vol_in_vol_out_dependency_agg[1], continuous)
        # volume_distributions.append(vol_in_vol_out_ks)
        #       - r_square
        # vol_in_vol_out_r = 
        self.Stats.r_square([x[0] for x in v_in_v_out],[x[1] for x in v_in_v_out])
        # volume_distributions.append(vol_in_vol_out_r)


        self.features.append(volume_distributions)

    # -------------------------------------------------------------
    # 
    # set_clustering_distribution ()
    # 
    # -------------------------------------------------------------

    def set_clustering_distribution(self):

        # only indirected
        G_undirected                = self.G.to_undirected()
        # for KS statistical test
        continuous = True

        clustering_distributions    = []
        clustering_distributions.append("clustering distribution")

        # unweighted
        clustering_distributions.append("\nunweighted:")

        self.unweighted_clustering_distribution             = nx.clustering(G_undirected)
        unweighted_clustering_cumulative_distribution       = self.Stats.get_cumulative_distribution(self.unweighted_clustering_distribution, 0)
        unweighted_clustering_cumulative_distribution_agg   = self.Stats.get_cumulative_distribution(self.unweighted_clustering_distribution, self.aggregate_number)
        clustering_distributions.append(unweighted_clustering_cumulative_distribution_agg)
        #       - computing the KS test
        # unweighted_clustering_cumulative_distribution_agg_ks = 
        self.Stats.kolmogorov_smirnov(unweighted_clustering_cumulative_distribution[0], 
                                        unweighted_clustering_cumulative_distribution_agg[0], continuous)
        # clustering_distributions.append(unweighted_clustering_cumulative_distribution_agg_ks)

        # adding the average value to the general values
        [average_unweighted_clustering,sd_unweighted_clustering] = self.Stats.get_mean_sd(self.unweighted_clustering_distribution)
        self.features[0].append(average_unweighted_clustering)
        self.features[0].append(sd_unweighted_clustering)

        # weighted
        clustering_distributions.append("\nweighted:")

        self.weighted_clustering_distribution           = nx.clustering(G_undirected, G_undirected.nodes(), self.weight_id)
        weighted_clustering_cumulative_distribution     = self.Stats.get_cumulative_distribution(self.weighted_clustering_distribution, 0)
        weighted_clustering_cumulative_distribution_agg = self.Stats.get_cumulative_distribution(self.weighted_clustering_distribution, self.aggregate_number)
        clustering_distributions.append(weighted_clustering_cumulative_distribution_agg)
        #       - computing the KS test
        # weighted_clustering_cumulative_distribution_agg_ks = 
        self.Stats.kolmogorov_smirnov(weighted_clustering_cumulative_distribution[0],
                                        weighted_clustering_cumulative_distribution_agg[0], continuous)
        # clustering_distributions.append(weighted_clustering_cumulative_distribution_agg_ks)
        # adding the average value to the general values
        [average_weighted_clustering,sd_weighted_clustering] = self.Stats.get_mean_sd(self.weighted_clustering_distribution)
        self.features[0].append(average_weighted_clustering)
        self.features[0].append(sd_weighted_clustering)

        self.features.append(clustering_distributions)

    # -------------------------------------------------------------
    # 
    # scc_analysis()
    # 
    # -------------------------------------------------------------

    def scc_analysis(self):

        scc_stats = []

        sccs = nx.strongly_connected_component_subgraphs(self.G)

        # adding values to the general values
        lscc                        = sccs[0]
        avg_shortest_path_lentgh    = nx.average_shortest_path_length(lscc)
        diameter                    = nx.diameter(lscc)
        self.features[0].append(avg_shortest_path_lentgh)
        self.features[0].append(diameter)

        # number of sccs
        n_scc = len(sccs)
        scc_stats.append(n_scc)

        # nodes per sccs
        nodes_scc = []
        for subgraph in sccs:
            nodes_scc.append(len(subgraph.nodes()))
        scc_stats.append(nodes_scc)

        # links per sccs
        links_scc = []
        for subgraph in sccs:
            links_scc.append(len(subgraph.edges()))
        scc_stats.append(links_scc)

        # volume per sccs
        volumes_scc = []
        for subgraph in sccs:
            volume = 0.0
            for edge in subgraph.edges(data = True):
                volume += edge[2][self.weight_id]
            volumes_scc.append(volume)
        scc_stats.append(volumes_scc)

        # Bow Tie analysis for the largest SCC
        nodes_in_lscc   = nx.strongly_connected_components(self.G)[0]
        other_nodes     = list(set(self.G.nodes())^set(nodes_in_lscc))
        in_nodes        = []
        out_nodes       = []
        
        for node in other_nodes:
            edges   = self.G.edges()
            stop    = False
            i=0
            while (stop == False and i < len(edges)-1):
                if node in edges[i]:
                    if edges[i][1] in nodes_in_lscc:
                        in_nodes.append(node)
                        stop = True
                    else:
                        if edges[i][0] in nodes_in_lscc:
                            out_nodes.append(node)
                            stop = True
                i += 1

        disconnected_nodes  = list(set(other_nodes)^set(in_nodes)^set(out_nodes))
        size                = len(self.G.nodes())
        scc_stats.extend([float(len(nodes_in_lscc))/size, float(len(in_nodes))/size, float(len(out_nodes))/size, float(len(disconnected_nodes))/size])
        self.features.append(scc_stats)

    # -------------------------------------------------------------
    # 
    # centrality_measures()
    # 
    # -------------------------------------------------------------

    def centrality_measures(self):

        centrality_measures = []

        # betweenness
        continuous = True
        # unweighted
        unweighted_betweenness_distribution                     = nx.betweenness_centrality(self.G)
        [unweighted_betweenness_mean,unweighted_betweenness_sd] = self.Stats.get_mean_sd (unweighted_betweenness_distribution)
        self.features[0].append(unweighted_betweenness_mean)
        self.features[0].append(unweighted_betweenness_sd)

        unweighted_betweenness_cumulative_distribution          = self.Stats.get_cumulative_distribution(unweighted_betweenness_distribution,0)
        unweighted_betweenness_cumulative_distribution_agg      = self.Stats.get_cumulative_distribution(unweighted_betweenness_distribution, self.aggregate_number)
        centrality_measures.append(unweighted_betweenness_cumulative_distribution_agg)
        #   - computing the KS test
        self.Stats.kolmogorov_smirnov(unweighted_betweenness_cumulative_distribution[0], 
                                        unweighted_betweenness_cumulative_distribution_agg[0], continuous)


        # weighted
        weighted_betweenness_distribution                       = nx.betweenness_centrality(self.G, weight = self.weight_id)
        [weighted_betweenness_mean, weighted_betweenness_sd]    = self.Stats.get_mean_sd(weighted_betweenness_distribution)
        self.features[0].append(weighted_betweenness_mean)
        self.features[0].append(weighted_betweenness_sd)

        weighted_betweenness_cumulative_distribution            = self.Stats.get_cumulative_distribution (weighted_betweenness_distribution, 0)
        weighted_betweenness_cumulative_distribution_agg        = self.Stats.get_cumulative_distribution (weighted_betweenness_distribution, self.aggregate_number)
        centrality_measures.append(weighted_betweenness_cumulative_distribution_agg)
        #   - computing the KS test
        self.Stats.kolmogorov_smirnov(weighted_betweenness_cumulative_distribution[0], 
                                        weighted_betweenness_cumulative_distribution_agg[0], continuous)
        
        # eigen vector
        eigenvector_distribution                                = nx.eigenvector_centrality(self.G)
        [eigenvector_mean, eigenvector_sd]                      = self.Stats.get_mean_sd(eigenvector_distribution)
        self.features[0].append(eigenvector_mean)
        self.features[0].append(eigenvector_sd)

        eigenvector_cumulative_distribution                     = self.Stats.get_cumulative_distribution(eigenvector_distribution, 0)
        eigenvector_cumulative_distribution_agg                 = self.Stats.get_cumulative_distribution(eigenvector_distribution, self.aggregate_number)
        centrality_measures.append(eigenvector_cumulative_distribution_agg)
        #   - computing the KS test
        self.Stats.kolmogorov_smirnov(eigenvector_cumulative_distribution[0], 
                                        eigenvector_cumulative_distribution_agg[0], continuous)

        self.features.append(centrality_measures)

    # -------------------------------------------------------------
    # 
    # transversal_measures()
    # 
    # -------------------------------------------------------------

    def transversal_measures(self):

        transversal_measures    = []
        continuous              = False
        # - V(k) 
        # all
        degree_volumes  = []
        keys            = self.degree_distribution.keys()
        for key in keys:
            degree      = self.degree_distribution[key]
            volume      = self.volume_distribution[key]
            degree_volumes.append([degree,volume])
        V_k             = self.Stats.get_dependency(degree_volumes)
        #       - getting the aggregate dependency
        V_k_agg         = self.Stats.aggregate_distribution(V_k, self.aggregate_number)
        transversal_measures.append(V_k_agg)
        #       - adding the sd of the real distribution
        transversal_measures.append(V_k[2])
        # storing KS and Rsquared
        self.Stats.kolmogorov_smirnov(V_k[1],V_k_agg[1],continuous)
        self.Stats.r_square([x[0] for x in degree_volumes],[x[1] for x in degree_volumes])


        # in
        in_degree_volumes   = []
        keys = []
        keys                = self.in_degree_distribution.keys()
        for key in keys:
            in_degree       = self.in_degree_distribution[key]
            in_volume       = self.in_volume_distribution[key]
            in_degree_volumes.append([in_degree,in_volume])
        V_k_in              = self.Stats.get_dependency(in_degree_volumes)
        #       - getting the aggregate dependency
        V_k_in_agg         = self.Stats.aggregate_distribution(V_k_in, self.aggregate_number)
        transversal_measures.append(V_k_in_agg)        
        #       - adding the sd of the real distribution
        transversal_measures.append(V_k_in[2])
        # storing KS and Rsquared
        self.Stats.kolmogorov_smirnov(V_k_in[1],V_k_in_agg[1],continuous)
        self.Stats.r_square([x[0] for x in in_degree_volumes],[x[1] for x in in_degree_volumes])


        # out
        out_degree_volumes   = []
        keys = []
        keys                = self.out_degree_distribution.keys()
        for key in keys:
            out_degree       = self.out_degree_distribution[key]
            out_volume       = self.out_volume_distribution[key]
            out_degree_volumes.append([out_degree,out_volume])
        V_k_out              = self.Stats.get_dependency(out_degree_volumes)
        #       - getting the aggregate dependency
        V_k_out_agg         = self.Stats.aggregate_distribution(V_k_out, self.aggregate_number)
        transversal_measures.append(V_k_out_agg)        
        #       - adding the sd of the real distribution
        transversal_measures.append(V_k_out[2])
        # storing KS and Rsquared
        self.Stats.kolmogorov_smirnov(V_k_out[1],V_k_out_agg[1],continuous) 
        self.Stats.r_square([x[0] for x in out_degree_volumes],[x[1] for x in out_degree_volumes])


        # - C(k)
        G_undirected                    = self.G.to_undirected()
        undirected_degree_distribution  = G_undirected.degree()

        # unweighted cluster
        degree_unweighted_clusters  = []
        keys                        = undirected_degree_distribution.keys()
        for key in keys:
            degree                  = undirected_degree_distribution[key]
            unweighted_cluster      = self.unweighted_clustering_distribution[key]
            degree_unweighted_clusters.append([degree,unweighted_cluster])
        C_k_unweighted              = self.Stats.get_dependency(degree_unweighted_clusters)
        #       - getting the aggregate dependency
        C_k_unweighted_agg          = self.Stats.aggregate_distribution(C_k_unweighted, self.aggregate_number)
        transversal_measures.append(C_k_unweighted_agg)
        #       - adding the sd of the real distribution
        transversal_measures.append(C_k_unweighted[2])
        # storing KS and Rsquared
        self.Stats.kolmogorov_smirnov(C_k_unweighted[1],C_k_unweighted_agg[1],continuous)
        self.Stats.r_square([x[0] for x in degree_unweighted_clusters],[x[1] for x in degree_unweighted_clusters])


        # weighted cluster
        degree_weighted_clusters    = []
        # keys = self.degree_distribution.keys()
        for key in keys:
            degree                  = undirected_degree_distribution[key]
            weighted_cluster        = self.weighted_clustering_distribution[key]
            degree_weighted_clusters.append([degree,weighted_cluster])
        C_k_weighted                = self.Stats.get_dependency(degree_weighted_clusters)
        #       - getting the aggregate dependency
        C_k_weighted_agg          = self.Stats.aggregate_distribution(C_k_weighted, self.aggregate_number)
        transversal_measures.append(C_k_weighted_agg)
        #       - adding the sd of the real distribution
        transversal_measures.append(C_k_weighted[2])
        # storing KS and Rsquared
        self.Stats.kolmogorov_smirnov(C_k_weighted[1],C_k_weighted_agg[1],continuous)
        self.Stats.r_square([x[0] for x in degree_weighted_clusters],[x[1] for x in degree_weighted_clusters])      

        # - Vij
        # average weight of links for Ki*Kj
        edges_volume_degree = []
        for edge in self.G.edges(data = True):
            node1_degree            = self.out_degree_distribution[edge[0]]
            node2_degree            = self.in_degree_distribution[edge[1]]
            weight                  = edge[2][self.weight_id]
            edges_volume_degree.append([node1_degree*node2_degree, weight])
        volume_end_point_degree     = self.Stats.get_dependency(edges_volume_degree)
        transversal_measures.append(volume_end_point_degree)

        # - Knn
        # unweighted
        # undirected
        average_neighbor_degrees        = nx.average_neighbor_degree(self.G)
        average_neighbor_degree_k       = []
        for key in keys:
            degree                      = undirected_degree_distribution[key]
            average_neighbor_degree     = average_neighbor_degrees[key]
            average_neighbor_degree_k.append([degree,average_neighbor_degree]) 
        average_neighbor_degree_k_dep   = self.Stats.get_dependency(average_neighbor_degree_k)
        # adding to the general values
        [average_neighbor_degree_mean, average_neighbor_degree_sd] = self.Stats.get_mean_sd(average_neighbor_degrees)
        self.features[0].append(average_neighbor_degree_mean)
        self.features[0].append(average_neighbor_degree_sd)
        #       - getting the aggregate dependency
        average_neighbor_degree_k_agg   = self.Stats.aggregate_distribution(average_neighbor_degree_k_dep,
                                                               self.aggregate_number)
        transversal_measures.append(average_neighbor_degree_k_agg)
        #       - adding the sd of the real distribution
        transversal_measures.append(average_neighbor_degree_k_dep[2])
        #       - computing the KS and R square test
        self.Stats.kolmogorov_smirnov(average_neighbor_degree_k_dep[1], average_neighbor_degree_k_agg[1], continuous)
        self.Stats.r_square([x[0] for x in average_neighbor_degree_k],[x[1] for x in average_neighbor_degree_k])


        # weighted
        # undirected
        average_neighbor_degrees_weighted       = nx.average_neighbor_degree(self.G, weight = self.weight_id)
        average_neighbor_degree_weighted_k      = []
        for key in keys:
            degree                              = undirected_degree_distribution[key]
            average_neighbor_degree_weighted    = average_neighbor_degrees_weighted[key]
            average_neighbor_degree_weighted_k.append([degree,average_neighbor_degree_weighted]) 
        average_neighbor_degree_weighted_k_dep  = self.Stats.get_dependency(average_neighbor_degree_weighted_k)
        # adding to the general values
        [average_neighbor_degree_weighted_mean, average_neighbor_degree_weighted_sd] = self.Stats.get_mean_sd(average_neighbor_degrees_weighted)
        self.features[0].append(average_neighbor_degree_weighted_mean)
        self.features[0].append(average_neighbor_degree_weighted_sd)  
        #       - getting the aggregate dependency
        average_neighbor_degree_weighted_k_agg   = self.Stats.aggregate_distribution(average_neighbor_degree_weighted_k_dep,
                                                               self.aggregate_number)
        transversal_measures.append(average_neighbor_degree_weighted_k_agg)
        #       - adding the sd of the real distribution
        transversal_measures.append(average_neighbor_degree_weighted_k_dep[2])
        #       - computing the KS and R square test
        self.Stats.kolmogorov_smirnov(average_neighbor_degree_weighted_k_dep[1], average_neighbor_degree_weighted_k_agg[1], continuous)
        self.Stats.r_square([x[0] for x in average_neighbor_degree_weighted_k],[x[1] for x in average_neighbor_degree_weighted_k])

        self.features.append(transversal_measures)


# Giving work to Matlab
    def save_extra(self):
        self.Stats.save_ks_s()



#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ==========================================
#   Libraries and Packages
# ==========================================
class Mapper:

        # -------------------------------------------------------------
        # 
        #  init (clean_data, mapper_list, kept_id_position, lost_id_position, 
        #             target_position, drop_unreferenced_entries, drop_ghosts, 
        #             remove_duplicates, duplicates_defining_set,
        #             merge_entries, merge_defining_set, commands)
        # 
        # -------------------------------------------------------------

        def __init__(self, clean_data, mapper_list, 
                     replace_ids,
                     kept_id_position, lost_id_position, target_positions, 
                     drop_unreferenced_entries, target_unreferenced_entries,
                     drop_ghosts, 
                     remove_duplicates, target_duplicates_set,
                     merge_entries, target_merge_set, 
                     commands): 

                self.data               = list (clean_data)

                #==============================================================================
                # Preparing the controls
                #==============================================================================
                
                # 0 - values to be changes from the mapper file
                self.replace_ids        = False
                if replace_ids == 'on':
                    self.replace_ids    = True
                    self.kept_position  = int (kept_id_position)
                    self.lost_position  = int (lost_id_position)

                # 1 - field(s) that need(s) to be mapped
                self.target_positions    = []
                for index in target_positions :
                    self.target_positions.append(int(index))

                # 2 - define whether entries containing ids not referenced
                #   in the mapper list should be dropped or not and store
                #   the indeces which should be checked for that
                self.drop_unreferenced_entries = False
                if drop_unreferenced_entries == 'on':
                    self.drop_unreferenced_entries = True
                    self.target_unreferenced_entries = []
                    for index in target_unreferenced_entries:
                        self.target_unreferenced_entries.append(int(index))
                self.unreferenced_entries = []                
                
                # 3 - define whether entries with ghosts (no kept ids in 
                #   the mapper) should be kept                
                # drop_ghosts ------- seee after big loop
                self.ghost_key   = 'ghost'
                self.drop_ghosts = False
                if drop_ghosts == 'on':
                    self.drop_ghosts = True               
                self.ghost_entry        = []                
                
                # 4 - define whether duplicates entries 
                #   should be kept                              
                self.remove_duplicates = False
                if remove_duplicates == 'on':
                    self.remove_duplicates = True
                    self.target_duplicates_set = []
                    for index in target_duplicates_set:
                        self.target_duplicates_set.append(int(index))
                    
                # 5 - define whether merge entries is activated
                self.merge_entries = False
                if merge_entries == 'on':
                    self.merge_entries = True
                    self.target_merge_set = []
                    for index in target_merge_set:
                        self.target_merge_set.append(int(index))
                    
                # 6 - create the map dictionary
                self.map = self.create_map(mapper_list)

                # 7 - create the list of all elements in kept position from the mapper
                self.kept_list = list(self.map.values())              
              
                # for log
                self.str_counter_ids = ''
                self.str_counter_ids += 'initial:\n number of nodes = ' + str(self.count_id())+'\n number of edges = '+str(len(self.data))+'\n'
 
                #==============================================================================
                # Starting the Mapping
                #       and keep track of 
                #           - unreferenced entities
                #           - ghosts
                #==============================================================================                

                for i in range(len(self.data)):

                    entry_found = True
                    ghost_found = False
                                    
                    # 1 - Do the mapping 
                    if(self.replace_ids):
                        for j in self.target_positions:         
                                if self.drop_ghosts:
                                        try:
                                            if self.map[str(self.data[i][j])] == self.ghost_key:
                                                    ghost_found = True
                                        except:
                                            pass
                                try:
                                    self.data[i][j] = self.map[str(self.data[i][j])]
                                except:
                                    pass
                            
                    # 2 - Check for unreferenced entries
                    if (self.drop_unreferenced_entries):
                        for j in self.target_unreferenced_entries:
                            if self.data[i][j] not in self.kept_list:
                                entry_found = False
                                
                    # 2bis - Append the elements the lists in case they should
                    if (not entry_found):
                        self.unreferenced_entries.append(i)
                    if (ghost_found):
                        self.ghost_entry.append(i)

                # for log
                self.str_counter_ids += 'after mapping:\n number of nodes = ' + str(self.count_id()) + '\n number of edges = ' + str(len(self.data)) + '\n'

                #==============================================================================
                # Removing Entries
                #==============================================================================
                
                self.final_removal      = []
                
                # 1 - removing not present in the mapping file 
                if (self.drop_unreferenced_entries) :
                     self.final_removal.extend(self.unreferenced_entries)
                
                # 2 - removing ghosts
                if (self.drop_ghosts):
                    self.final_removal.extend(self.ghost_entry)
                
                # 3 - removing duplicates
                if (self.remove_duplicates):
                    self.final_removal.extend(self.get_duplicates())
                    
                # 4 - effectively remove
                self.final_removal = list(set(self.final_removal))
                self.final_removal.sort()
                if (len(self.final_removal)>0):
                    self.remove_entries()
                    self.str_counter_ids += 'after dropping entries:\n number of nodes = '+str(self.count_id())+'\n number of edges = '+str(len(self.data))+'\n'

                #==============================================================================
                # Merging Entries
                #==============================================================================                

                if (merge_entries == 'on') :
                    self.commands   = commands
                    self.data       = self.do_merge_entries()
                    # for log
                    self.str_counter_ids += 'after merging lines:\n number of nodes = '+str(self.count_id())+'\n number of edges = '+str(len(self.data))+'\n'
 
                #==============================================================================
                # Update Data
                #==============================================================================                  
                
                self.mapped_data = self.data

                print ("    number of entries: "+str(len(self.mapped_data))+'\n')

        # -------------------------------------------------------------
        # 
        #  create_map (initial_map)
        # 
        # -------------------------------------------------------------
        # creates a dictionary[lost_position] = kept_position
        # -------------------------------------------------------------

        def create_map(self, initial_map):
            
            map_dict = dict()

            for couple in initial_map:
                # if the lost position is not empty
                if couple [self.lost_position]:
                    # if kept_position is a ghost : store
                    if not couple[self.kept_position]:
                        # if we seek for ghosts
                        if self.drop_ghosts == True:
                            map_dict[couple[self.lost_position]] = self.ghost_key
                    else:
                        map_dict[couple[self.lost_position]] = couple[self.kept_position]
            return map_dict

        # -------------------------------------------------------------
        # 
        #  get_duplicates ()
        # 
        # -------------------------------------------------------------
        # store the index of duplicates with 
        # the same values for the defining set
        # from data
        # -------------------------------------------------------------

        def get_duplicates(self):

              duplicates = []
              merged_set = set()
              
              for i in range(len(self.data)):
                  non_empty = True
                  defining_set = []
                  
                  for j in self.target_duplicates_set:
                      if self.data[i][j] == '':
                          non_empty = False
                          defining_set.append(self.data[i][j])
                  defining_set = tuple(defining_set)
                  
                  if (non_empty):
                      if defining_set not in merged_set:
                          merged_set.add(defining_set)
                      else:
                         duplicates.append(i)

              return duplicates
        
        # -------------------------------------------------------------
        # 
        #  merge_entries ()
        # 
        # -------------------------------------------------------------
        # removes redundant couples in the data
        # merges entries according to the commands
        # -------------------------------------------------------------

        def do_merge_entries(self):
            
            counter     = []
            merged_dict = dict()
            merged_list = []

            for i in range(len(self.data)):
                
                non_empty = True
                defining_set = []
                
                for j in self.target_merge_set:
                      if self.data[i][j] == '':
                          non_empty = False
                          defining_set.append(self.data[i][j])
                defining_set = tuple(defining_set)
                
                if (non_empty):
                    if defining_set in merged_dict:
                        p = merged_dict[defining_set]
#                        (self.data[i][0],self.data[i][1])]
                        for e in range(len(self.data[i])):
                            index = str(e)
                            if index in self.commands:
                                command                   = self.commands [index]
                                merged_list[p][e]         = self.apply_command(command, merged_list[p][e], self.data[i][e], counter[p])
#                        for e in range(len(self.commands)):
#                            print e
#                            command                     = self.commands [str(2+e)]
#                            merged_list[p][2+e]         = self.apply_command(command, merged_list[p][2+e], self.data[i][2+e], counter[p])
                        counter [p]     += 1
                        
                    else:
                        merged_list.append(self.data[i])
                        merged_dict[defining_set] = len(merged_list)-1
                        counter.append(1)
                        
                        
#                if '' != self.data[i][0] and '' != self.data[i][1]:
#                    if (self.data[i][0],self.data[i][1]) in merged_dict:
#                        p = merged_dict[(self.data[i][0],self.data[i][1])]
#                     
#                        for e in range(len(self.commands)):
#                            command                     = self.commands [str(2+e)]
#                            merged_list[p][2+e]         = self.apply_command(command, merged_list[p][2+e], self.data[i][2+e], counter[p])
#                        counter [p]     += 1
#                    else:
#                        merged_list.append(self.data[i])
#                        merged_dict[(self.data[i][0],self.data[i][1])] = len(merged_list)-1
#                        counter.append(1)
                        
            return merged_list

        # -------------------------------------------------------------
        # 
        #  remove_entries ()
        # 
        # -------------------------------------------------------------
        # remove entities that are not present in the map using the 
        # list outliers_entry
        # -------------------------------------------------------------

        def remove_entries (self):

            for i in self.final_removal:
                self.data[i] = 'to_erase'
            size = len(self.data)
            i = 0    
            while(i<size):
                if self.data[i] == 'to_erase':
                    del self.data[i]
                    # i = i -1
                    size = size - 1
                else:
                    i = i + 1

        # -------------------------------------------------------------
        # 
        #  apply_command (command, val_1, val_2, coeficient)
        # 
        # -------------------------------------------------------------
        # applies the command (avg, aggregation, equal)
        # -------------------------------------------------------------

        def apply_command (self, command, val_1, val_2, coeficient):
            if val_1 == 'NA' or val_2 == 'NA':
                result = 'NA'

            else:
                if command == '+':
                    if val_1 == '':
                            val_1 = 0.0
                    if val_2 == '':
                            val_2 = 0.0
                    result = float(val_2) + float(val_1)

                if command == 'same':
                    if val_2 == '':
                        result = val_1
                    else:
                        if val_1 == '':
                            result = val_2
                        else:
                            if val_2 == val_1:
                                result = val_1
                            else:
                                result = 'NA'

                if command == 'avg':
                    
                    if val_2 != '' and val_1 != '':
                        result = (float(val_1)*coeficient + float(val_2))/(coeficient+1)
                    else:
                        if val_1 == '':
                                result = val_2
                        else:
                                result = val_1


##            if val_1 == 'NA' or val_2 == 'NA' or val_1 == '' or val_2 == '':
##                result = 'NA'
##
##            else:
##
##                if command == '+':
##                    result = float(val_2) + float(val_1)
##                else:
##                    if command == 'same':
##                        if val_2 == val_1:
##                            result = val_1
##                        else:
##                            result = 'NA'
##                    else:
##                        if command == 'avg':
##                            result = (float(val_1)*coeficient + float(val_2))/(coeficient+1)

            return result

        # -------------------------------------------------------------
        # 
        #  count_id ()
        # 
        # -------------------------------------------------------------
        # checks for unique ids
        # -------------------------------------------------------------

        def count_id(self):
            ids = []
            for i in range(len(self.data)):
                ids.append(self.data[i][0])
                ids.append(self.data[i][1])
            length = len(set(ids))
            return length
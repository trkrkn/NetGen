#!/usr/bin/env python
# -*- coding: utf-8 -*-

# ==========================================
#   Libraries and Packages
# ==========================================

class Mapper:

        # -------------------------------------------------------------
        # 
        #  init (data, mapper_list, kept_position, lost_position, erase_lines, keep_all, commands)
        # 
        # -------------------------------------------------------------

        def __init__(self, data, mapper_list, kept_position, lost_position, erase_lines, keep_all, commands):

                self.data          = list(data)
                self.map           = mapper_list
                self.kept_position = int(kept_position)
                self.lost_position = int(lost_position)
                self.commands      = commands

                self.str_counter_ids = ''

                self.str_counter_ids += 'initial:\n number of nodes = '+str(self.count_id())+'\n number of edges = '+str(len(self.data))+'\n'


                # mapping entries
                for couple in self.map :
                        for i in range(len(data)):
                            if couple[self.kept_position] != '':
                                if couple[self.lost_position] in data[i]:
                                        n_id            = data[i].count(couple[self.lost_position])
                                        for j in range(n_id):
                                            pos             = [a for a,x in enumerate(data[i]) if x == couple[self.lost_position]]
                                            data[i][pos[0]] = couple[self.kept_position]
                
                # merging the entries
                self.str_counter_ids += 'after mapping:\n number of nodes = '+str(self.count_id())+'\n number of edges = '+str(len(self.data))+'\n'
                if (erase_lines == 'on') :
                    self.data = self.erase_lines()
                    self.str_counter_ids += 'after merging lines:\n number of nodes = '+str(self.count_id())+'\n number of edges = '+str(len(self.data))+'\n'

                if (keep_all != 'on') :
                    self.data = self.remove_outliers()
                    self.str_counter_ids += 'after dropping entries:\n number of nodes = '+str(self.count_id())+'\n number of edges = '+str(len(self.data))+'\n'
                    
                self.mapped_data = self.data
                print ("    final number of entries:"+str(len(self.mapped_data))+'\n')

        # -------------------------------------------------------------
        # 
        #  erase_lines ()
        # 
        # -------------------------------------------------------------
        # removes redundant couples in the data
        # merges entries according to the commands
        # -------------------------------------------------------------

        def erase_lines (self):

            counter     = []
            merged_list = []

            for i in range(len(self.data)):
                    if '' != self.data[i][0] and '' != self.data[i][1]:                                  
                            position = [j for j in range(len(merged_list)) if merged_list[j][0] == self.data[i][0] and merged_list[j][1] == self.data[i][1]]
                            if len (position) == 1:
                                    p               = position [0]
                                    for e in range(len(self.commands)):
                                        command                     = self.commands [str(2+e)]
                                        merged_list[p][2+e]         = self.apply_command(command, merged_list[p][2+e], self.data[i][2+e], counter[p])
                                    counter [p]     += 1
                            else:
                                    merged_list.append(self.data[i])
                                    counter.append(1)
            return merged_list

        # -------------------------------------------------------------
        # 
        #  erase_lines ()
        # 
        # -------------------------------------------------------------
        # remove entities that are not present in the map
        # -------------------------------------------------------------

        def remove_outliers (self):

            new_data = []

            for i in range(len(self.data)):
                    # if the 'from' entity is in the list
                    from_in = [x for x in self.map if self.data[i][0] == x [self.kept_position]]
                    if len(from_in) > 0:
                            # if the 'to' entity is in the list
                            to_in = [x for x in self.map if self.data[i][1] == x [self.kept_position]]
                            if len(to_in) > 0:
                                    # keep the entry
                                    new_data.append(self.data[i])

            return new_data

        # -------------------------------------------------------------
        # 
        #  apply_command (command, val_1, val_2, coeficient)
        # 
        # -------------------------------------------------------------
        # applies the command (avg, aggregation, equal)
        # -------------------------------------------------------------

        def apply_command (self, command, val_1, val_2, coeficient):
            if val_1 == 'NA' or val_2 == 'NA' or val_1 == '' or val_2 == '':
                result = 'NA'

            else:

                if command == '+':
                    result = float(val_2) + float(val_1)
                else:
                    if command == 'same':
                        if val_2 == val_1:
                            result = val_1
                        else:
                            result = 'NA'
                    else:
                        if command == 'avg':
                            result = (float(val_1)*coeficient + float(val_2))/(coeficient+1)

            return result

        def count_id(self):
            unique_ids = []
            for i in range(len(self.data)):
                if self.data[i][0] not in unique_ids:
                    unique_ids.append(self.data[i][0])
                if self.data[i][1] not in unique_ids:
                    unique_ids.append(self.data[i][1])

            return len(unique_ids)

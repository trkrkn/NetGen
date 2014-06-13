function submitAndWrite()
{


var text="";
text+="#!/usr/bin/pythonw \n";
text+="# -*- coding: utf-8 -*- \n";

text+="in_file_directory = ['"+localStorage.getItem("in_file_directory")+"']\n";
text+="in_file_name = ['"+localStorage.getItem("in_file_name")+"']\n";
text+="in_file_extension = ['"+localStorage.getItem("in_file_extension")+"']\n";
text+="in_file_delimiter = ['"+localStorage.getItem("in_file_delimiter")+"']\n";
text+="in_file_quote = ['"+localStorage.getItem("in_file_quote")+"']\n";
text+="in_file_missing_value = ['"+localStorage.getItem("in_file_missing_value")+"']\n";

text+="raw_data_structure = ["+localStorage.getItem("RawStruc")+"]\n";

text+="clean_data_structure = ["+localStorage.getItem("CleanStruc")+"]\n";

text+="out_file_directory = ['"+localStorage.getItem("out_file_directory")+"']\n";
text+="out_file_name = ['"+localStorage.getItem("out_file_name")+"']\n";
text+="out_file_extension = ['"+localStorage.getItem("out_file_extension")+"']\n";
text+="out_file_delimiter = ['"+localStorage.getItem("out_file_delimiter")+"']\n";
text+="out_file_missing_value = ['"+localStorage.getItem("out_file_missing_value")+"']\n";
text+="out_file_single_file = ['"+localStorage.getItem("out_file_single_file")+"']\n";
text+="out_file_separate_line = ['"+localStorage.getItem("out_file_separate_line")+"']\n";

text+="mapping_file_directory = ["+localStorage.getItem("mapping_file_directory")+"]\n";
text+="mapping_file_name = ["+localStorage.getItem("mapping_file_name")+"]\n";
text+="mapping_file_extension = ["+localStorage.getItem("mapping_file_extension")+"]\n";
text+="mapping_file_delimiter = ["+localStorage.getItem("mapping_file_delimiter")+"]\n";

text+="mapping_out_file_name = ["+localStorage.getItem("mapping_out_file_name")+"]\n";

text+="mapping_replace_ids = ["+localStorage.getItem("mapping_replace_ids")+"]\n";
text+="mapping_kept_id_position = ["+localStorage.getItem("mapping_kept_id_position")+"]\n";
text+="mapping_lost_id_position = ["+localStorage.getItem("mapping_lost_id_position")+"]\n";

text+="mapping_target_position = ["+localStorage.getItem("mapping_target_position")+"]\n";

text+="mapping_drop_unreferenced_entries = ["+localStorage.getItem("mapping_drop_unreferenced_entries")+"]\n";
text+="mapping_target_unreferenced_entries = ["+localStorage.getItem("mapping_target_unreferenced_entries")+"]\n";

text+="mapping_drop_ghosts = ["+localStorage.getItem("mapping_drop_ghosts")+"]\n";

text+="mapping_remove_duplicates = ["+localStorage.getItem("mapping_remove_duplicates")+"]\n";
text+="mapping_target_duplicates_set = ["+localStorage.getItem("mapping_target_duplicates_set")+"]\n";

text+="mapping_merge_entries = ["+localStorage.getItem("mapping_merge_entries")+"]\n";
text+="mapping_target_merge_set = ["+localStorage.getItem("mapping_target_merge_set")+"]\n";

text+="mapping_commands = ["+localStorage.getItem("mapping_commands")+"]\n";

text+="network_analysis = ["+localStorage.getItem("network_analysis")+"]\n";

text+="network_out_node = ["+localStorage.getItem("network_out_node")+"]\n";
text+="network_in_nodes = ["+localStorage.getItem("network_in_node")+"]\n";
text+="network_is_directed = ["+localStorage.getItem("network_is_directed")+"]\n";
text+="network_is_weighted = ["+localStorage.getItem("network_is_weighted")+"]\n";
text+="network_edge_weight = ["+localStorage.getItem("network_edge_weight")+"]\n";


var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
saveAs(blob, "config.py");

}


// All these functions deal with submitting adapted information to the config file on the bottom of the page.

	//////////////////////////////////////////////////////////////// IN FILE INFO  //////////////////////////////////
function submitInInputs()
{
	var text=localStorage.getItem("in_file_name");
		document.getElementById("wname").innerHTML=text;
		
		text=localStorage.getItem("in_file_directory");
		document.getElementById("wdirectory").innerHTML=text;
		
		text=localStorage.getItem("in_file_extension");
		document.getElementById("wextension").innerHTML=text;
		
		text=localStorage.getItem("in_file_delimiter");
		document.getElementById("wdelimiter").innerHTML=text;
		
		text=localStorage.getItem("in_file_quote");
		document.getElementById("wquote").innerHTML=text;
		
		text=localStorage.getItem("in_file_missing_value");
		document.getElementById("wmissing").innerHTML=text;

}		

	
/////////////////////////////////////////////////////////////// OUT FILE INFO//////////////////////////////

function submitOutInputs()
{
	var text=localStorage.getItem("out_file_name");
		document.getElementById("wOutname").innerHTML=text;
		
		text=localStorage.getItem("out_file_directory");
		document.getElementById("wOutdirectory").innerHTML=text;
		
		text=localStorage.getItem("out_file_extension");
		document.getElementById("wOutextension").innerHTML=text;
		
		text=localStorage.getItem("out_file_delimiter");
		document.getElementById("wOutdelimiter").innerHTML=text;
		
		text=localStorage.getItem("out_file_missing_value");
		document.getElementById("wOutmissing").innerHTML=text;
		
		text=localStorage.getItem("out_file_separate_line");
		document.getElementById("wOutseparate").innerHTML=text;

		var Single=localStorage.getItem("SingleFile");
		if(Single=="false")
		{
			localStorage.setItem("out_file_single_file","off");
			document.getElementById("wOutsingle").innerHTML="off";
		}
		else
		{
			localStorage.setItem("out_file_single_file","on");
			document.getElementById("wOutsingle").innerHTML="on";
		}
		
}		


		
//////////////////////////////////////////////////////////////// RAW DATA STRUCTURE  //////////////////////////////////
function submitRawInputs()
{
	document.getElementById("wRawStructure").innerHTML=localStorage.getItem("RawStruc");
}

	
	//////////////////////////////////////////////////////////////// CLEAN DATA STRUCTURE  //////////////////////////////////
	
function submitCleanInputs()
{
	document.getElementById("wCleanStructure").innerHTML=localStorage.getItem("CleanStruc");
}




///////////////////////////////////////////////////////////// MAPPING SUBMIT //////////////////////////////


function submitMappingProcesses()
{
	var nbr_processes=localStorage.getItem('nbr_processes');
	var nbr_mapping_files=document.getElementById('mapping_file_number').value;
	var nbr_out_files=document.getElementById('in_file_number').value;
	var text='';
	
	//submit_mapping_directory
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_directory'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_directory'+nbr_processes);
	localStorage.setItem("mapping_file_directory",text);
	document.getElementById("wMappingdirectory").innerHTML=text;
	
	//submit_mapping_delimiter
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_delimiter'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_delimiter'+nbr_processes);
	localStorage.setItem("mapping_file_delimiter",text);
	document.getElementById("wMappingdelimiter").innerHTML=text;
	
	//submit_mapping_extension
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_extension'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_extension'+nbr_processes);
	localStorage.setItem("mapping_file_extension",text);
	document.getElementById("wMappingextension").innerHTML=text;
	
	//submit_mapping_name
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_name'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_name'+nbr_processes);
	localStorage.setItem("mapping_file_name",text);
	document.getElementById("wMappingname").innerHTML=text;
	
	//submit_mapping_out_file_name
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_out_file_name'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_out_file_name'+nbr_processes);
	localStorage.setItem("mapping_out_file_name",text);
	document.getElementById("wMappingOutname").innerHTML=text;
	
	//submit_mapping_replace_ids
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_replace_ids'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_replace_ids'+nbr_processes);
	localStorage.setItem("mapping_replace_ids",text);
	document.getElementById("wMappingReplaceIds").innerHTML=text;
	
	//submit_mapping_kept_id_position
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_kept_id_position'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_kept_id_position'+nbr_processes);
	localStorage.setItem("mapping_kept_id_position",text);
	document.getElementById("wMappingKeptIdPosition").innerHTML=text;
	
	//submit_mapping_lost_id_position
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_lost_id_position'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_lost_id_position'+nbr_processes);
	localStorage.setItem("mapping_lost_id_position",text);
	document.getElementById("wMappingLostIdPosition").innerHTML=text;
	
	//submit_mapping_target_position
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_target_position'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_target_position'+nbr_processes);
	text+=']';
	localStorage.setItem("mapping_target_position",text);
	document.getElementById("wMappingTargetPosition").innerHTML=text;
	
	//submit_mapping_drop_unreferenced_entries
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_drop_unreferenced_entries'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_drop_unreferenced_entries'+nbr_processes);
	localStorage.setItem("mapping_drop_unreferenced_entries",text);
	document.getElementById("wMappingDropUnreferencedEntries").innerHTML=text;
	
	//submit_mapping_target_unreferenced_entries
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_target_unreferenced_entries'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_target_unreferenced_entries'+nbr_processes);
	text+=']';
	localStorage.setItem("mapping_target_unreferenced_entries",text);
	document.getElementById("wMappingTargetUnreferencedEntries").innerHTML=text;
	
	//submit_mapping_drop_ghosts
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_drop_ghosts'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_drop_ghosts'+nbr_processes);
	localStorage.setItem("mapping_drop_ghosts",text);
	document.getElementById("wMappingDropGhosts").innerHTML=text;
	
	//submit_mapping_remove_duplicates
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_remove_duplicates'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_remove_duplicates'+nbr_processes);
	localStorage.setItem("mapping_remove_duplicates",text);
	document.getElementById("wMappingRemoveDuplicates").innerHTML=text;
	
	//submit_mapping_target_duplicates_set
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_target_duplicates_set'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_target_duplicates_set'+nbr_processes);
	text+=']';
	localStorage.setItem("mapping_target_duplicates_set",text);
	document.getElementById("wMappingTargetDuplicatesSet").innerHTML=text;
	
	//submit_mapping_merge_entries
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+=localStorage.getItem('submit_mapping_merge_entries'+i);
		text+=',';
	}
	text+=localStorage.getItem('submit_mapping_merge_entries'+nbr_processes);
	localStorage.setItem("mapping_merge_entries",text);
	document.getElementById("wMappingMergeEntries").innerHTML=text;
	
	//submit_mapping_target_merge_set
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_target_merge_set'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_target_merge_set'+nbr_processes);
	text+=']';
	localStorage.setItem("mapping_target_merge_set",text);
	document.getElementById("wMappingTargetMergeSet").innerHTML=text;
	
	//submit_mapping_commands
	text='';
	for(var i=1;i<nbr_processes;i++)
	{
		text+='[';
		text+=localStorage.getItem('submit_mapping_commands'+i);
		text+=']';
		text+=',';
	}
	text+='[';
	text+=localStorage.getItem('submit_mapping_commands'+nbr_processes);
	text+=']';
	localStorage.setItem("mapping_commands",text);
	document.getElementById("wMappingCommands").innerHTML=text;
}


function submitNetworkInputs()
{
	var nbr=localStorage.getItem('cpt_clean');  // number of clean structures
	
	// network analysis ON
	var text="\'on\'";
	localStorage.setItem("network_analysis", text);
	document.getElementById("wNetworkAnalysis").innerHTML=text;
	
	// node out
	text="";
	for(var i=1;i<nbr;i++)
	{
		text+=localStorage.getItem("network_out"+i);
		text+=',';
	}
	text+=localStorage.getItem("network_out"+i);
	localStorage.setItem("network_out_node",text);
	document.getElementById("wNetworkOutNode").innerHTML=text;
	
	// node in
	text="";
	for(var i=1;i<nbr;i++)
	{
		text+=localStorage.getItem("network_in"+i);
		text+=',';
	}
	text+=localStorage.getItem("network_in"+i);
	localStorage.setItem("network_in_node",text);
	document.getElementById("wNetworkInNode").innerHTML=text;
	
	
	// directed
	text="";
	for(var i=1;i<nbr;i++)
	{
		text+=localStorage.getItem("network_dir"+i);
		text+=',';
	}
	text+=localStorage.getItem("network_dir"+i);
	localStorage.setItem("network_is_directed",text);
	document.getElementById("wNetworkIsDirected").innerHTML=text;
	
	// weighted
	text="";
	for(var i=1;i<nbr;i++)
	{
		text+=localStorage.getItem("network_wei"+i);
		text+=',';
	}
	text+=localStorage.getItem("network_wei"+i);
	localStorage.setItem("network_is_weighted",text);
	document.getElementById("wNetworkIsWeighted").innerHTML=text;
	
	// edge
	text="";
	for(var i=1;i<nbr;i++)
	{
		text+=localStorage.getItem("network_edge"+i);
		text+=',';
	}
	text+=localStorage.getItem("network_edge"+i);
	localStorage.setItem("network_edge_weight",text);
	document.getElementById("wNetworkEdgeWeight").innerHTML=text;



}










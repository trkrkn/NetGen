
///////////////////////////////////// MAPPING PROCESSES ////////////

function OnOff(idCurrent_On,idCurrent_Off,idCurrent_pre,idCurrent_info,idCurrent_bigDiv,idNext_bigDiv)
{
	var on=document.getElementById(idCurrent_On).checked;
	var off=document.getElementById(idCurrent_Off).checked;
	if(off==true && on==false)
	{
		document.getElementById(idCurrent_bigDiv).style.display = 'none';
		document.getElementById(idNext_bigDiv).style.display = 'block';
	}
	else
	{
		//alert('je suis la');
		SetMappingDiv(idCurrent_bigDiv,idNext_bigDiv);
		document.getElementById(idCurrent_pre).style.display = 'none';
		document.getElementById(idCurrent_info).style.display = 'block';
	}
	
	localStorage.setItem(idCurrent_bigDiv+'On',on);
}	


//Fonction appelée au On+Continue de Replacing
function CheckKeptLost()
{
	var kept=document.getElementById("mapping_replace_kept").value;
	var lost=document.getElementById("mapping_replace_lost").value;
	var ok=atLeastOneCheckedReplace(); // verify if one target has been selected
	if(kept!=lost && ok==true)
	{
		ShowHideDiv('replacing_div','dropping_div');
		ShowHideDiv("mapping_file_replace_info",'mapping_file_replace_pre');

	}
	else
	{
		alert("You cannot choose the same Kept and Lost values and you have to check at least one Target");
	}
	
	//storage dropGhost
	var ghost=document.getElementById("mapping_file_drop_ghost_on").checked; //if on -> true if off-> false
	localStorage.setItem('dropghostOn',ghost);
}

function atLeastOneCheckedReplace()
{
	var nbr=localStorage.getItem("nbr_fields_replace");
	var atLeastOneChecked=false;
	for(var i=1;i<=nbr;i++)
	{
		var t=document.getElementById("checkBoxReplaceField_"+i).checked;
		//alert(t);
		if(t==true)
		{atLeastOneChecked=true;}
	}
	
	return atLeastOneChecked;

}

// fonction appelée au On+Continue de Dropping
function CheckDrop()
{
	var nbr=localStorage.getItem("nbr_fields_drop");
	var atLeastOneChecked=false;
	for(var i=1;i<=nbr;i++)
	{
		var t=document.getElementById("checkBoxDropField_"+i).checked;
		//alert(t);
		if(t==true)
		{atLeastOneChecked=true;}
	}
	
	if(atLeastOneChecked==true)
	{
		ShowHideDiv("dropping_div",'removing_div');
		ShowHideDiv("mapping_file_drop_info",'mapping_file_drop_pre');
		// a ce moment on peut deja écrire dans le config file  mais attention si la personne revient en arrière -> supprimer
	}
	else
	{
		alert("Check at least one identifier");
	}
}

// fonction appelée au On+Continue de Removing duplicates
function CheckRemove()
{
	var nbr=localStorage.getItem("nbr_fields_remove");
	var atLeastOneChecked=false;
	for(var i=1;i<=nbr;i++)
	{
		var t=document.getElementById("checkBoxRemoveField_"+i).checked;
		//alert(t);
		if(t==true)
		{atLeastOneChecked=true;}
	}
	
	if(atLeastOneChecked==true)
	{
		ShowHideDiv("removing_div",'merging_div');
		ShowHideDiv("mapping_file_dupl_info",'mapping_file_dupl_pre');
		// a ce moment on peut deja écrire dans le config file  mais attention si la personne revient en arrière -> supprimer
	}
	else
	{
		alert("Check at least one identifier");
	}
}

// fonction appelée au On+Continue de merging
function CheckMerge()
{
	var nbr=localStorage.getItem("nbr_fields_merge");
	var atLeastOneCheckedTarget=false;
	var atLeastOneCheckedMerge=false;
	var ok=true;
	//var array_target=[];
	//var array_merged=[];
	for(var i=1;i<=nbr;i++)
	{
		var t=document.getElementById("checkBoxMergeFieldTarget_"+i).checked;
		var m=document.getElementById("checkBoxMergeField_"+i).checked;
		
		if(t==true)
		{
			atLeastOneCheckedTarget=true;
			if(t==m) // t&m are true so it is not ok, user has to verify its checkboxes
			{ok=false;}
		
		
		}
		if(m==true)
		{atLeastOneCheckedMerge=true;}	

	}
	

	
	if(atLeastOneCheckedTarget==true && atLeastOneCheckedMerge==true && ok==true)
	{
		ShowHideDiv("merging_div",'mapping_file_summary');
		ShowHideDiv("mapping_file_merge_info",'mapping_file_merge_pre');
		// a ce moment on peut deja écrire dans le config file  mais attention si la personne revient en arrière -> supprimer
	}
	else if(atLeastOneCheckedTarget==false && atLeastOneCheckedMerge==true && ok==true)
	{
		alert("Check at least one identifier for the point 1 ");
	}
	else if(atLeastOneCheckedTarget==true && atLeastOneCheckedMerge==false && ok==true)
	{
		alert("Check at least one identifier for the point 2 ");
	}
	else if(atLeastOneCheckedTarget==true && atLeastOneCheckedMerge==true && ok==false)
	{
		alert("You cannot choose the same identifier in point 1 & 2 ");
	}
	else
	{
		alert("Verify your checkboxes");
	}
}


function CheckMappingStructures()
{
		var cpt=localStorage.getItem("cpt_mapping_struc");  // number of mapping structures (From1, To1, ...) (From2,To2,...)
		var nbr=document.getElementById('mapping_file_number').value;
		var array=[];
		var ok=true;
		
		// check the structure for every mapping-file
		for(var i=1;i<=nbr;i++)
		{
			var oneStructBool=false;
			for(var j=1;j<=cpt;j++)
			{

				var t=document.getElementById("checkBoxMappingStruc_"+i+j).checked;
				if(t==true && oneStructBool==false)
				{
					oneStructBool=true;
					array[i-1]=j;
					//alert(code);
				}
				else if(t==true && oneStructBool==true)
				{alert("You can only check 1 out structure per mapping-file. Verify checkboxes");
				ok=false;}
				
				
			}
			
			if(oneStructBool==false)
			{
				alert("You have to check 1 out structure per mapping-file. Verify checkboxes");
				ok=false;
			}		
		}
		
		//alert(array);
		if(ok==true)
		{
		localStorage.setItem("array_mapping",array);
		ShowHideDiv('mapping_structure_bigDiv','mapping_processes_bigDiv');
		progressBarContinue();
		}
}

function checkMappingSameStructure()
{



}


//////////////////////////// IN ////////////////////////

function CheckIn()
{
		var cpt_in=localStorage.getItem("cpt_in");
		var nbr=document.getElementById('in_file_number').value;
		var array=[];
		var ok=true;
		
		// check the structure for every in-file
		for(var i=1;i<=nbr;i++)
		{
			var oneStructBool=false;
			for(var j=1;j<=cpt_in;j++)
			{

				var t=document.getElementById("checkBoxIn_"+i+j).checked;
				if(t==true && oneStructBool==false)
				{
					oneStructBool=true;
					array[i-1]=j;
					//alert(code);
				}
				else if(t==true && oneStructBool==true)
				{alert("You can only check 1 in structure per in-file. Verify checkboxes");
				ok=false;}
				
				
			}
			
			if(oneStructBool==false)
			{
				alert("You have to check 1 in structure per in-file. Verify checkboxes");
				ok=false;
			}		
		}
		
		//alert(array);
		
		if(ok==true)
		{
			storeInInputs(array);
			submitInInputs();
		
			ShowHideDiv('in_file_bigDiv','raw_file_bigDiv')
			progressBarContinue();
		}



}

//////////////////////////// OUT ////////////////////////
function CheckOut()
	{
		var cpt_out=localStorage.getItem("cpt_out");
		var nbr=document.getElementById('in_file_number').value;
		var array=[];
		var ok=true;
		
		// check the structure for every out-file
		for(var i=1;i<=nbr;i++)
		{
			var oneStructBool=false;
			for(var j=1;j<=cpt_out;j++)
			{

				var t=document.getElementById("checkBoxOut_"+i+j).checked;
				if(t==true && oneStructBool==false)
				{
					oneStructBool=true;
					array[i-1]=j;
					//alert(code);
				}
				else if(t==true && oneStructBool==true)
				{alert("You can only check 1 out structure per out-file. Verify checkboxes");
				ok=false;}
				
				
			}
			
			if(oneStructBool==false)
			{
				alert("You have to check 1 out structure per out-file. Verify checkboxes");
				ok=false;
			}		
		}
		
		
		if(ok==true)
		{
		//alert("hello");
		
		storeOutInputs(array);
		submitOutInputs();
		
		ShowHideDiv('out_file_bigDiv','clean_file_bigDiv');
		progressBarContinue();
		}
	}

//////////////////////////// RAW ////////////////////////
function CheckRaw()
{
	var cpt_raw=localStorage.getItem("cpt_raw");
		var nbr=document.getElementById('in_file_number').value;
		// check the structure for every in-file
		var ok=true;
		for(var i=1;i<=nbr;i++)
		{

			var oneStructBool=false;
			for(var j=1;j<=cpt_raw;j++)
			{
				var t=document.getElementById("checkBoxRaw_"+i+j).checked;
				if(t==true && oneStructBool==false)
				{
					oneStructBool=true;

				}
				else if(t==true && oneStructBool==true)
				{alert("You can only check 1 raw structure per in-file. Verify checkboxes");
				ok=false;}
				
				
			}
			
			if(oneStructBool==false)
			{
				alert("You have to check 1 raw structure per in-file. Verify checkboxes");
				ok=false;
			}

			
			
		}
		
		if(ok==true)
		{
		storeRawInputs();
		submitRawInputs();
	
		ShowHideDiv('raw_file_bigDiv','out_file_bigDiv');
		progressBarContinue();
		}


}

//////////////////////////// CLEAN ////////////////////////
function CheckClean()
{
	var cpt_clean=localStorage.getItem("cpt_clean");
		var nbr=document.getElementById('in_file_number').value;
		// check the structure for every in-file
		var ok=true;

		for(var i=1;i<=nbr;i++)
		{

			var oneStructBool=false;
			for(var j=1;j<=cpt_clean;j++)
			{
				var t=document.getElementById("checkBoxClean_"+i+j).checked;
				if(t==true && oneStructBool==false)
				{
					oneStructBool=true;
				

				}
				else if(t==true && oneStructBool==true)
				{alert("You can only check 1 clean structure per in-file. Verify checkboxes");
				ok=false;}
				
				
			}
			
			if(oneStructBool==false)
			{
				alert("You have to check 1 clean structure per in-file. Verify checkboxes");
				ok=false;
			}

			
			
		}
		
		if(ok==true)
		{
		storeCleanInputs();
		submitCleanInputs();
	
		ShowHideDiv('clean_file_bigDiv','mapping_info_bigDiv');
		progressBarContinue();
		}


}


////////////////////////////////// NETWORK /////////////////////////////////////////////

function CheckNetwork() 
{
	var nbr=localStorage.getItem('cpt_clean');  // number of clean structures
	var ok=true;
	
	for(var i=1;i<=nbr;i++)
	{
		var node_out=document.getElementById("network_out_node"+i).value;
		var node_in=document.getElementById("network_in_node"+i).value;
		var edge=document.getElementById("network_edge_weight"+i).value;
		if(node_out==node_in || node_out==edge || node_in==edge)
		{
			ok=false;
			alert("You cannot choose same fields for in and out nodes and egde weight");
		}
	}
	if(ok==true)
	{
		storeNetworkInputs();
		submitNetworkInputs();
		ShowHideDiv('network_analysis_div','config_file_bigDiv')
	}
}















function ClearLocalStorage()
{
	localStorage.clear();
}


//////////////////////////// IN FILE ///////////////////////////////////
function storeInInputs(array)
{
	var nbr=document.getElementById('in_file_number').value;
	var name="";
	var dir="";
	var del="";
	var ext="";
	var mis="";
	var quote="";
		

	for(var i=1;i<nbr;i++)
	{
		name+=document.getElementById("in_file_name"+i).value;
		name+="','";
		dir+=document.getElementById("in_file_directory"+array[i-1]).value;
		dir+="','";
		mis+=document.getElementById("in_file_missing_value"+array[i-1]).value;
		mis+="','";
		ext+=document.getElementById("in_file_extension"+array[i-1]).value;
		ext+="','";
		var y=document.getElementById("in_file_delimiter"+array[i-1]).value;
		if(y=="tab")
			{del+='\\t';}
		else
			{del+=y;}
		del+="','";
		quote+=document.getElementById("in_file_quote"+array[i-1]).value;
		quote+="','";
	}
	name+=document.getElementById("in_file_name"+nbr).value;
	localStorage.setItem("in_file_name",name);
	dir+=document.getElementById("in_file_directory"+array[nbr-1]).value;
	localStorage.setItem("in_file_directory",dir);
	ext+=document.getElementById("in_file_extension"+array[nbr-1]).value;
	localStorage.setItem("in_file_extension",ext);
	var y=document.getElementById("in_file_delimiter"+array[nbr-1]).value;
	if(y=="tab")
	{del+='\\t';}
	else
	{del+=y;}
	localStorage.setItem("in_file_delimiter",del);
	quote+=document.getElementById("in_file_quote"+array[nbr-1]).value;
	localStorage.setItem("in_file_quote",quote);
	mis+=document.getElementById("in_file_missing_value"+array[nbr-1]).value;
	localStorage.setItem("in_file_missing_value",mis);
	

}

//////////////////////////// OUT FILE ///////////////////////////////////
function storeOutInputs(array)
{
var nbr=document.getElementById('in_file_number').value;
var Single=localStorage.getItem("SingleFile");
	var name="";
	var dir="";
	var del="";
	var ext="";
	var mis="";
	var sep="";
		

	for(var i=1;i<nbr;i++)
	{
		if(Single=="false")
		{
			name+=document.getElementById("out_file_name"+i).value;
			name+="','";
			dir+=document.getElementById("out_file_directory"+array[i-1]).value;
			dir+="','";
		}
		mis+=document.getElementById("out_file_missing_value"+array[i-1]).value;
		mis+="','";
		ext+=document.getElementById("out_file_extension"+array[i-1]).value;
		ext+="','";
		var y=document.getElementById("out_file_delimiter"+array[i-1]).value;
		if(y=="tab")
			{del+='\\t';}
		else
			{del+=y;}
		del+="','";
	}
	//alert(Single);
	if(Single=="false")
	{
		name+=document.getElementById("out_file_name"+nbr).value;
		dir+=document.getElementById("out_file_directory"+array[nbr-1]).value;
		sep="";
	}
	else
	{
		name=document.getElementById("out_file_name"+1).value;
		dir=document.getElementById("out_file_directory"+1).value;
		sep=document.getElementById("out_file_separate_line"+1).value;
	}
	localStorage.setItem("out_file_name",name);
	localStorage.setItem("out_file_directory",dir);
	localStorage.setItem("out_file_separate_line",sep);
	ext+=document.getElementById("out_file_extension"+array[nbr-1]).value;
	localStorage.setItem("out_file_extension",ext);
	var y=document.getElementById("out_file_delimiter"+array[nbr-1]).value;
	if(y=="tab")
	{del+='\\t';}
	else
	{del+=y;}
	localStorage.setItem("out_file_delimiter",del);
	mis+=document.getElementById("out_file_missing_value"+array[nbr-1]).value;
	localStorage.setItem("out_file_missing_value",mis)
	


}

function storeSingleFile()
{
	var on=document.getElementById("optionSingleOn").checked;
	if(on==true)
	{
		localStorage.setItem("SingleFile", "true");
	}
	else
	{localStorage.setItem("SingleFile", "false")};
}


//////////////////////////// RAW ///////////////////////////////////
function storeRawInputs()
{
		var cpt_raw=localStorage.getItem("cpt_raw");
		var nbr=document.getElementById('in_file_number').value;
		var text_raw_struct='';
		// check the structure for every in-file
		var ok=true;
		for(var i=1;i<=nbr;i++)
		{
			var text='';
			var code='';
			var oneStructBool=false;
			for(var j=1;j<=cpt_raw;j++)
			{
				var t=document.getElementById("checkBoxRaw_"+i+j).checked;
				if(t==true && oneStructBool==false)
				{
					oneStructBool=true;
					code=j;
					//alert(code);
				}
				
				
			}
			
			text=getDataStructureRaw("tr1_Raw"+code,code);
			if(i!=nbr)
			{text+=","}				
			text_raw_struct+=text;
			
			
			
		}
		
		localStorage.setItem("RawStruc",text_raw_struct);

}

function getDataStructureRaw(idList,code)
	{
		
		var list=document.getElementById(idList);
		//alert(leng);
		var nbr=list.childNodes.length;
		//alert(nbr);
		//alert('hello'); 
		var cpt=(nbr-4);
		//alert(cpt);
		var text="['";
		
		//Store Name and Type of each elements of the table
		
		//First element (does not belong to the list -> particular treatment)
			var t=document.getElementById("tr1_Name_Raw"+code).value;
			text+=t+"','";
			t=document.getElementById("tr1_Type_Raw"+code).value;
			if(cpt==1)
			{text+=t+"'";}
			else
			{text+=t+"','";}
			
		//Other elements
		for(var i=2;i<=cpt;i++)
		{			
			var t=document.getElementById("tr"+i+"_Name_Raw"+code).value;
			text+=t+"','";
			t=document.getElementById("tr"+i+"_Type_Raw"+code).value;
			if(i!=cpt)
			{
				text+=t+"','";
			}
			else
			{
				text+=t+"'";
			}
			
		}
		
		text+="]";
		//Retrieve to config file
		//alert(text);
		//document.getElementById("wRawStructure").innerHTML=text;
		return text;
	}
	
//////////////////////////// CLEAN ///////////////////////////////////
	
function getDataStructureClean(idList,code)
	{
		
		var list=document.getElementById(idList);
		//alert(leng);
		var nbr=list.childNodes.length;
		var cpt=(nbr-4);
		//alert(cpt); 
		var text="['";
		
		//Store Name and Type of each checked elements of the table
		
		//First element (does not belong to the list -> particular treatment)
		var checked=document.getElementById("tr1_checkBoxCleanKept_"+code).checked;
		if(checked==true)
		{
			var t=document.getElementById("tr1_Name_Clean"+code).value;
			text+=t+"','";
			t=document.getElementById("tr1_Type_Clean"+code).value;
			if(cpt==1)
			{text+=t+"'";}
			else
			{text+=t+"','";}
		}
			
		//Other elements
		for(var i=2;i<=cpt;i++)
		{
			var checked=document.getElementById("tr"+i+"_checkBoxCleanKept_"+code).checked;
			if(checked==true)
			{
				var t=document.getElementById("tr"+i+"_Name_Clean"+code).value;
				text+=t+"','";
				t=document.getElementById("tr"+i+"_Type_Clean"+code).value;
				if(i!=cpt)
				{
					text+=t+"','";
				}
				else
				{
					text+=t+"'";
				}
			}
			
		}
		
		text+="]";
		// Check if there is not 'str','] at the end of the string
		len=text.length;
		var v=text[len-3];
		if(v==',')
		{
			var t="";
			for(var i=0;i<len-3;i++)
			{
			t+=text[i];
			}
			t+="]";
			text=t;
		}
		//Retrieve to config file
		//alert(text);
		//document.getElementById("wCleanStructure").innerHTML=text;
		return text;
	}

function storeCleanInputs()
{
		var cpt_clean=localStorage.getItem("cpt_clean");
		var nbr=document.getElementById('in_file_number').value;
		var text_clean_struct='';
		// check the structure for every in-file
		var ok=true;
		var array=[];
		
		for(var i=1;i<=nbr;i++)
		{
			var text='';
			var code='';
			var oneStructBool=false;
			for(var j=1;j<=cpt_clean;j++)
			{
				var t=document.getElementById("checkBoxClean_"+i+j).checked;
				if(t==true && oneStructBool==false)
				{
					oneStructBool=true;
					code=j;
					//alert(code);
					array[i-1]=j;
				}
				
				
			}
			
			text=getDataStructureClean("tr1_Clean"+code,code);
			if(i!=nbr)
			{text+=","}				
			text_clean_struct+=text;

		}
		
		localStorage.setItem("CleanStruc",text_clean_struct);
		localStorage.setItem("array_out",array);

}


///////////////////////////  MAPPING /////////////////////////////////::

	
	function storeMappingFileChoice()
	{
	var nbr=document.getElementById('mapping_file_number').value;
	var choice=[]; // vecteur contenant les fichiers choisis
	var index=0;
	var chosenStruct;  // strcuture du premier élément coché pour la comparer aux possibles autres mapping files cochés
	var ok=true;
	var checked=false;
	var array=localStorage.getItem("array_mapping");  // vecteur associant une strcuture a chaque fichier choisi par l'utilisateur
	var checkedOnce=false;
	var nbr_checked_files=0;
	for(var i=1;i<=nbr;i++) // on passe en revue la checkbox pr chaque fichier
	{
		checked=document.getElementById('checkBoxMappingSetting_'+i).checked;
		if(checked==true && checkedOnce==false)
		{
			choice[index]=i; 
			index+=1;
			chosenStruct=array[2*i-2];
			checkedOnce=true;
			nbr_checked_files=1;
		}
		else if(checked==true && checkedOnce==true)
		{
			if(chosenStruct==array[2*i-2])
			{
				choice[index]=i;
				index+=1;
				nbr_checked_files+=1;
			}
			else
			{
			alert("Check only mapping files with the same structure");
			ok=false;
			}
		}
		checked=false;
	}
	if(checkedOnce==false && ok==true)
	{
		alert("Check at least one mapping file");
	}
	
	if(ok==true && checkedOnce==true)
	{
		var nbr_mapping=localStorage.getItem('nbr_processes');
		localStorage.setItem("chosen_struct_mapping", chosenStruct);
		localStorage.setItem("nbr_checked_mapping_files", nbr_checked_files);
		localStorage.setItem("mapping_file_name"+nbr_mapping,choice);
		checkBoxesOutSetting();
		ShowHideDiv("mapping_file_settings","out_file_choice_div");
	}
}

function storeOutFileChoice()
{

	var nbr=document.getElementById('in_file_number').value;
	var nbr_map=localStorage.getItem("nbr_checked_mapping_files");
	var nbr_mapping=document.getElementById('mapping_file_number').value;
	var choice=[]; // vecteur contenant les fichiers choisis pour chaque mapping file
	var index=0;
	var chosenStruct;  // strcuture du premier élément coché pour la comparer au possibles autres out files cochés
	var ok=true;
	var checked=false;
	var array=localStorage.getItem("array_out");  // vecteur associant une strcuture a chaque fichier choisi par l'utilisateur
	var checkedOnce=false;
	
	if(nbr_mapping>0)
	{
		checkedOnce=true;
		
		for(var i=1;i<=nbr_map;i++) // on passe en revue le choix pr chaque mapping file
		{
			var t=document.getElementById('out_match_'+i).value;
			if(t!='all')
			{
				var n=t.length;
				choice[i-1]=t[n-1]; // on recupère juste le numéro du out-file
				if(i==1)
				{
					var x=parseInt(t[n-1]);
					chosenStruct=array[2*x-2];
				}
			}
			else
			{
				choice[i-1]=t;
				chosenStruct=array[0];
			}
			
		}
	}
	
	// AJOUTER VERIFICATION UN SEUL MAPPING FILE PAR OUT FILE !!!
	
	else // nbr_mapping==0 pas de mapping files
	{
		for(var i=1;i<=nbr;i++) // on passe en revue la checkbox pr chaque fichier
		{
			checked=document.getElementById('checkBoxOutSetting_'+i).checked;
			if(checked==true && checkedOnce==false)
			{
				choice[index]=i; 
				index+=1;
				chosenStruct=array[2*i-2];
				checkedOnce=true;
			}
			else if(checked==true && checkedOnce==true)
			{
				if(chosenStruct==array[2*i-2])
				{
					choice[index]=i;
					index+=1;
				}
				else
				{
				alert("Check only out files with the same structure");
				ok=false;
				}
			}
			checked=false;
		}
		if(checkedOnce==false && ok==true)
		{
			alert("Check at least one out file");
		}
	}
	
	if(ok==true && checkedOnce==true)
	{
	
			var nbr_mapping=localStorage.getItem('nbr_processes');
			localStorage.setItem("mapping_out_file_name"+nbr_mapping, choice);
			localStorage.setItem("chosen_struct_out", chosenStruct);
			ShowHideDivProcessContinue();
			document.getElementById("mapping_file_replace_pre").style.display = 'block';
			document.getElementById("mapping_file_replace_info").style.display = 'none';
	}
}



function storeMappingChoice() // fonction qui enregistre le choix de l'utilisateur au départ s'il veut des mapping de process ou non (utile pour l'affiochage et la gestion des "backs"
{
	var on=document.getElementById("optionMappingOn").checked;
	var off=document.getElementById("optionMappingOff").checked;
	if(off==true && on==false) // pas de mapping processes
	{	
		localStorage.setItem("choiceYesNo", "no");
	}
	else
	{
		localStorage.setItem("choiceYesNo", "yes");
		storeNbrOfProcesses(0); // mise a 0 du compteur de process de mapping
	}

}


function storeMappingProcessesInputs()
{
	var nbr=localStorage.getItem('nbr_processes');
	var nbr_mapping_files=document.getElementById('mapping_file_number').value;
	var nbr_out_files=document.getElementById('in_file_number').value;
	var nbr_map=localStorage.getItem("nbr_checked_mapping_files"); // nbr de mapping files checkés pour ce process
	
	// STORAGE mapping file stockage des "directory,delimiter et extension" associés
	if(nbr_mapping_files==0)
	{
		localStorage.setItem('submit_mapping_name'+nbr,'');
		localStorage.setItem('submit_mapping_directory'+nbr,'');
		localStorage.setItem('submit_mapping_delimiter'+nbr,'');
		localStorage.setItem('submit_mapping_extension'+nbr,'');
	}
	else if(nbr_mapping_files>0)
	{ 	
	
		var name='';
		var directory='';
		var delimiter='';
		var extension='';
		
		for(var i=1;i<=nbr_map;i++)
		{
			var array_map=localStorage.getItem("mapping_file_name"+nbr);
			var index=2*i-2;
			var key=array_map[index]; // numéro du mapping file
			
			name+=document.getElementById('mapping_file_name'+key).value;
			
			var array=arrayInfoMapping();
				
			directory+=document.getElementById("mapping_file_directory"+array[key-1]).value;
			delimiter+=document.getElementById("mapping_file_delimiter"+array[key-1]).value;
			extension+=document.getElementById("mapping_file_extension"+array[key-1]).value;
			
			if(i!=nbr_map)
			{
				name+="','";
				directory+="','";
				delimiter+="','";
				extension+="','";
			}
		}
		
		localStorage.setItem('submit_mapping_name'+nbr, "[\'"+name+"\']");
		localStorage.setItem('submit_mapping_directory'+nbr, "[\'"+directory+"\']");
		localStorage.setItem('submit_mapping_delimiter'+nbr, "[\'"+delimiter+"\']");
		localStorage.setItem('submit_mapping_extension'+nbr, "[\'"+extension+"\']");
		
	}
	
	//STORAGE out-files (avec la même structure)
	var array_out_files=[];
	var cpt=0;
	var SingleOutFile=localStorage.getItem("SingleFile");
	
	
	if(SingleOutFile=="false")
	{
		if(nbr_mapping_files==0) // pas de fichier de mapping
		{
			var array_out=localStorage.getItem("mapping_out_file_name"+nbr);
			var len=array_out.length;
			nbr_map=(len+1)/2;
		}
		var name='';
		for(var i=1;i<=nbr_map;i++)
		{
				var array_out=localStorage.getItem("mapping_out_file_name"+nbr);
				var index=2*i-2;
				var key=array_out[index]; // numéro du out file
				//alert(key);
				if(key=='a')  // a est le premier élément du mot "all"
				{
					name+='all';
				}
				else
				{
					name+=document.getElementById('out_file_name'+key).value;
					
					if(i!=nbr_map)
					{
						name+="','";
					}
				}
				
		}
		localStorage.setItem('submit_mapping_out_file_name'+nbr, "[\'"+name+"\']");
	}
	else
	{
		var nameOutFile=document.getElementById("[\'out_file_name1\']").value;
		localStorage.setItem('submit_mapping_out_file_name'+nbr, "\'"+nameOutFile+"\'");
	}
	
	
	//STORAGE REPLACE
	var replacingOn=localStorage.getItem('replacing_divOn'); //bool true if on  false if off
	if(replacingOn=="false") //off -> pas de replacing pour ce process ATTENTION après stockage : bool->string
	{
		localStorage.setItem("submit_mapping_replace_ids"+nbr,"\'off\'");
		localStorage.setItem("submit_mapping_kept_id_position"+nbr,"\'\'");
		localStorage.setItem("submit_mapping_lost_id_position"+nbr,"\'\'");
		localStorage.setItem("submit_mapping_drop_ghosts"+nbr,"\'off\'");
		localStorage.setItem("submit_mapping_target_position"+nbr,"\'\'");
	}
	
	else // on
	{
		localStorage.setItem("submit_mapping_replace_ids"+nbr,"\'on\'");
		var NameKept=document.getElementById('mapping_replace_kept').value;		// format : '1 : From et c'est le 1 qui nous intéresse
		var numCol=parseInt(NameKept[0])-1;
		localStorage.setItem("submit_mapping_kept_id_position"+nbr,"\'"+numCol+"\'");
		
		var NameLost=document.getElementById('mapping_replace_lost').value;		// format : 'tr1_Name_Mapping3 et c'est le 1 qui nous intéresse
		numCol=parseInt(NameLost[0])-1;
		localStorage.setItem("submit_mapping_lost_id_position"+nbr,"\'"+numCol+"\'");
		
		var dropghost=localStorage.getItem('dropghostOn');
		if(dropghost=='true')
		{
			localStorage.setItem("submit_mapping_drop_ghosts"+nbr,"\'on\'");
		}
		else
		{
			localStorage.setItem("submit_mapping_drop_ghosts"+nbr,"\'off\'");
		}
		
		var nbrFields=localStorage.getItem("nbr_fields_replace");  //number of fields for this structure of out-files
		//alert(nbrFields);
		var cpt_array=0;
		var array_fields=[];
		for(var i=1;i<=nbrFields;i++)
		{
			var checked=document.getElementById('checkBoxReplaceField_'+i).checked;
			if(checked==true)
			{
				var name=document.getElementById('checkBoxReplaceField_'+i).value;
				//alert(name);
				array_fields[cpt_array]=name;
				cpt_array+=1;
			}
			
		}
		//alert(array_fields);
		localStorage.setItem("submit_mapping_target_position"+nbr,"\'"+array_fields+"\'");
		
	}
	
	
	//storage DROP
	var droppingOn=localStorage.getItem('dropping_divOn'); //bool true if on  false if off
	if(droppingOn=="false") //off -> pas de dropping pour ce process ATTENTION après stockage : bool->string
	{
		localStorage.setItem("submit_mapping_drop_unreferenced_entries"+nbr,"\'off\'");
		localStorage.setItem("submit_mapping_target_unreferenced_entries"+nbr,"\'\'");
	}
	
	else // on
	{
		localStorage.setItem("submit_mapping_drop_unreferenced_entries"+nbr,"\'on\'");
		var nbrFields=localStorage.getItem("nbr_fields_drop");  //number of fields for this structure of out-files
		//alert(nbrFields);
		var cpt_array=0;
		var array_fields=[];
		for(var i=1;i<=nbrFields;i++)
		{
			var checked=document.getElementById('checkBoxDropField_'+i).checked;
			if(checked==true)
			{
				var name=document.getElementById('checkBoxDropField_'+i).value;
				//alert(name);
				array_fields[cpt_array]=name;
				cpt_array+=1;
			}
			
		}
		//alert(array_fields);
		localStorage.setItem("submit_mapping_target_unreferenced_entries"+nbr,"\'"+array_fields+"\'");
		
	}
	
	//storage REMOVE DUPLICATES
	var duplOn=localStorage.getItem('removing_divOn'); //bool true if on  false if off
	if(duplOn=="false") //off -> pas de dropping pour ce process ATTENTION après stockage : bool->string
	{
		localStorage.setItem("submit_mapping_remove_duplicates"+nbr,"\'off\'");
		localStorage.setItem("submit_mapping_target_duplicates_set"+nbr,"\'\'");
	}
	
	else // on
	{
		localStorage.setItem("submit_mapping_remove_duplicates"+nbr,"\'on\'");
		var nbrFields=localStorage.getItem("nbr_fields_remove");  //number of fields for this structure of out-files
		//alert(nbrFields);
		var cpt_array=0;
		var array_fields=[];
		for(var i=1;i<=nbrFields;i++)
		{
			var checked=document.getElementById('checkBoxRemoveField_'+i).checked;
			if(checked==true)
			{
				var name=document.getElementById('checkBoxRemoveField_'+i).value;
				//alert(name);
				array_fields[cpt_array]=name;
				cpt_array+=1;
			}
			
		}
		//alert(array_fields);
		localStorage.setItem("submit_mapping_target_duplicates_set"+nbr,"\'"+array_fields+"\'");
		
	}
	
	//storage MERGING ENTRIES
	var mergeOn=localStorage.getItem('merging_divOn'); //bool true if on  false if off
	if(mergeOn=="false") //off -> pas de merging pour ce process ATTENTION après stockage : bool->string
	{
		localStorage.setItem("submit_mapping_merge_entries"+nbr,"\'off\'");
		localStorage.setItem("submit_mapping_target_merge_set"+nbr,"\'\'");
		localStorage.setItem("submit_mapping_commands"+nbr,"\'\'");
	}
	
	else // on
	{
		localStorage.setItem("submit_mapping_merge_entries"+nbr,"\'on\'");
		var nbrFields=localStorage.getItem("nbr_fields_merge");  //number of fields for this structure of out-files
		//alert(nbrFields);
		var cpt_array=0;
		var cpt_array_target=0;
		var array_fields=[];
		var array_fields_cmd=[];
		var array_cmd=[];
		for(var i=1;i<=nbrFields;i++)
		{
			var checkedTarget=document.getElementById("checkBoxMergeFieldTarget_"+i).checked;
			if(checkedTarget==true)
			{
				var name=document.getElementById('checkBoxMergeFieldTarget_'+i).value;
				//alert(cmd);
				array_fields[cpt_array_target]=name;
				cpt_array_target+=1;
			}
			
			var checked=document.getElementById("checkBoxMergeField_"+i).checked;
			if(checked==true)
			{
				var name=document.getElementById('checkBoxMergeField_'+i).value;
				var cmd=document.getElementById('selectMergeField_'+i).value;
				//alert(cmd);
				//array_fields_cmd[cpt_array]="\'"+name+"\'";
				array_cmd[cpt_array]=name+" : "+cmd;
				cpt_array+=1;
			}
			
		}
		//alert(array_fields);
		localStorage.setItem("submit_mapping_target_merge_set"+nbr,"\'"+array_fields+"\'");
		//localStorage.setItem("submit_mapping_fields_commands"+nbr,array_fields_cmd);
		localStorage.setItem("submit_mapping_commands"+nbr,"\'"+array_cmd+"\'");
	}
	
}


function storeNbrOfProcesses(state) // state= 0 or 1 or -1
{
	if(state==0)
	{
		localStorage.setItem("nbr_processes", 0);
	}
	else if(state==1) // +1 new process
	{
		var i=localStorage.getItem("nbr_processes");
		i=parseInt(i);
		i+=1;
		localStorage.setItem("nbr_processes", i);
		alert('Number of mapping processes : '+i);
	}
	else if(state==-1)//-1 on remove le process entamé jusque là
	{
		var i=localStorage.getItem("nbr_processes");
		i=parseInt(i);
		i-=1;
		localStorage.setItem("nbr_processes", i);
		alert('Number of mapping processes : '+i);
	}
	else
	{alert('error');}

}

function setMappingInputstoNull()
{
	localStorage.setItem("mapping_file_directory","");
	localStorage.setItem("mapping_file_delimiter","");
	localStorage.setItem("mapping_file_extension","");
	localStorage.setItem("mapping_file_name","");
	localStorage.setItem("mapping_out_file_name","");
	localStorage.setItem("mapping_replace_ids","");
	localStorage.setItem("mapping_kept_id_position","");
	localStorage.setItem("mapping_lost_id_position","");
	localStorage.setItem("mapping_target_position","");
	localStorage.setItem("mapping_drop_unreferenced_entries","");
	localStorage.setItem("mapping_target_unreferenced_entries","");
	localStorage.setItem("mapping_drop_ghosts","");
	localStorage.setItem("mapping_remove_duplicates","");
	localStorage.setItem("mapping_target_duplicates_set","");
	localStorage.setItem("mapping_merge_entries","");
	localStorage.setItem("mapping_target_merge_set","");
	localStorage.setItem("mapping_commands","");
}


/////// NETWORK //////
function storeNetworkChoiceYes() // fonction qui enregistre le choix de l'utilisateur au départ s'il veut configurer une analyse reseau ou non (utile pour l'affiochage et la gestion des "backs"
{
	
		localStorage.setItem("NetworkYesNo", "yes");

}
function storeNetworkChoiceNo() // fonction qui enregistre le choix de l'utilisateur au départ s'il veut configurer une analyse reseau ou non (utile pour l'affiochage et la gestion des "backs"
{
	
		localStorage.setItem("NetworkYesNo", "no");
		var text="\'off\'";
		localStorage.setItem("network_analysis", text);
		document.getElementById("wNetworkAnalysis").innerHTML=text;

}

function storeNetworkInputs()
{
	var nbr=localStorage.getItem('cpt_clean');  // number of clean structures
	
	for(var i=1;i<=nbr;i++)
	{
		var node_out=document.getElementById("network_out_node"+i).value;
		var node_in=document.getElementById("network_in_node"+i).value;
		var edge=document.getElementById("network_edge_weight"+i).value;
		var on_dir=document.getElementById("network_is_directed_on"+i).checked;
		var off_dir=document.getElementById("network_is_directed_off"+i).checked;
		var on_wei=document.getElementById("network_is_weighted_on"+i).checked;
		var off_wei=document.getElementById("network_is_weighted_off"+i).checked;
		
		localStorage.setItem("network_out"+i, "\'"+node_out+"\'");
		localStorage.setItem("network_in"+i, "\'"+node_in+"\'");
		localStorage.setItem("network_edge"+i, "\'"+edge+"\'");
		
		if(off_dir==true && on_dir==false) // network directed
		{	
			localStorage.setItem("network_dir"+i, "\'off\'");
		}
		else
		{
			localStorage.setItem("network_dir"+i, "\'on'");
		}
		if(off_wei==true && on_wei==false) // network weighted
		{	
			localStorage.setItem("network_wei"+i, "\'off\'");
		}
		else
		{
			localStorage.setItem("network_wei"+i, "\'on\'");
		}
	}

}






////////////////////////////// Checkboxes /////////////////////

//////////////////////// OUT FILE //////////////////////////////
function checkBoxesOut(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de out-file (bouton Continue) avec le paramètre 1
	var nbr=document.getElementById('in_file_number').value;
	var text='<label><input type="checkbox" id="checkBoxOut_1'+cpt+'" checked>Out-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxOut_'+i+cpt+'">Out-File '+i+'</br>';
	}
			
	text+='</label>';
	document.getElementById('checkboxOut_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_out", cpt);


}	

/////////////////////////// IN FILE ////////////////////////
function checkBoxesIn(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de in-file (bouton Continue) avec le paramètre 1
	var nbr=document.getElementById('in_file_number').value;
	var text='<label><input type="checkbox" id="checkBoxIn_1'+cpt+'" checked>In-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxIn_'+i+cpt+'">In-File '+i+'</br>';
	}
			
	text+='</label>';
	document.getElementById('checkboxIn_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_in", cpt);


}		
		
///////////////////////// RAW STRUCTURE /////////////////////////
function checkBoxesRaw(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de in-file (bouton Continue) avec le paramètre 1
	var nbr=document.getElementById('in_file_number').value;   
	//var nbr=3;
	var text='<label><input type="checkbox" id="checkBoxRaw_1'+cpt+'" checked>In-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxRaw_'+i+cpt+'">In-File '+i+'</br>';
	}
			
	text+='</label>';
	document.getElementById('checkboxRaw_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_raw", cpt);


}

//////////////////////// CLEAN STRUCTURE /////////////////////////
function checkBoxesClean(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de in-file (bouton Continue) avec le paramètre 1
	// modif tellz que le checked est a chaque fois celui egal au cpt !!!
	var nbr=document.getElementById('in_file_number').value;
	var text='<label><input type="checkbox" id="checkBoxClean_1'+cpt+'" checked>Out-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxClean_'+i+cpt+'">Out-File '+i+'</br>';
	}
			
	text+='</label>';
	document.getElementById('checkboxClean_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_clean", cpt);
	// Retrieve
	//document.getElementById("result").innerHTML=localStorage.getItem("lastname");
	
	if(cpt==1)
	{
		localStorage.setItem("cpt_out_fields"+1, 1); //il y a au moins une structure avec au moins un élement
	}

}

/////////////////////// MAPPING //////////////////////////////////////////////

function checkBoxesMapping(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de mapping-file (bouton Continue) avec le paramètre 1
	// modif tellz que le checked est a chaque fois celui egal au cpt !!!
	var nbr=document.getElementById('mapping_file_number').value;
	var text='<label><input type="checkbox" id="checkBoxMapping_1'+cpt+'" checked>Mapping-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxMapping_'+i+cpt+'">Mapping-File '+i+'</br>';
	}
			
	text+='</label><br>';
	document.getElementById('checkboxMapping_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_mapping", cpt);
	// Retrieve
	//document.getElementById("result").innerHTML=localStorage.getItem("lastname");

}

function checkBoxesMappingStruc(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de mapping-file (bouton Continue) avec le paramètre 1
	// modif tellz que le checked est a chaque fois celui egal au cpt !!!
	var nbr=document.getElementById('mapping_file_number').value;
	var text='<label><input type="checkbox" id="checkBoxMappingStruc_1'+cpt+'" checked>Mapping-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxMappingStruc_'+i+cpt+'">Mapping-File '+i+'</br>';
	}
			
	text+='</label><br>';
	document.getElementById('checkboxMappingStruc_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_mapping_struc", cpt);
	// Retrieve
	//document.getElementById("result").innerHTML=localStorage.getItem("lastname");
	
	if(cpt==1)
	{
		localStorage.setItem("cpt_mapping_fields"+1, 1); //il y a au moins une structure avec au moins un élement
	}

}

function checkBoxesOutSetting()
{
	var nbr_map=localStorage.getItem("nbr_checked_mapping_files");
	var nbr_out=document.getElementById('in_file_number').value;
	var nbr_mapping=document.getElementById('mapping_file_number').value;
	var text='<label>';
	var array=localStorage.getItem("array_out");  // vecteur associant une strcuture a chaque fichier choisi par l'utilisateur
	var array_map=localStorage.getItem("array_mapping");
	var chosenStruc=localStorage.getItem("chosen_struct_mapping");
	var nbr_struc=localStorage.getItem("cpt_clean");
	
	if(nbr_mapping>0)   // on a des fichiers de mapping
	{
		var array_mapping_files=[]; // array qui va contenir les numéros de tous les mappings files sélectionnés
		var cpt=0;
		for(var i=1;i<=nbr_mapping;i++)
		{
			
			var checked=document.getElementById('checkBoxMappingSetting_'+i).checked;
			if(checked==true) 
			{
				array_mapping_files[cpt]=i; 
				cpt++;
			}
		}
		
		//alert(array_mapping_files);
		
		if(nbr_map==1) // par défaut on choisit all
		{	
			var j=array_mapping_files[0];
			text+='Mapping-File '+j+'</label>';
			text+='<div class="form-group">\
								<div class="col-lg-6">\
			 <select class="form-control" id="out_match_1">\
										<option>all</option>';
			for(var i=1;i<=nbr_out;i++)
			{
				text+='<option>Out-file '+i+'</option>';
			}
			text+='</select>\
				</div></div>';
		}
		else // 
		{
		
			for(var i=1;i<=nbr_mapping;i++) // pour chaque mapping file choisi, on va associer un out file correspondant
			{
				var checked=document.getElementById('checkBoxMappingSetting_'+i).checked;
				if(checked==true) 
				{
				
					text+='Mapping-File '+i+'</label>';
					text+='<div class="form-group">\
								<div class="col-lg-6">\
					<select class="form-control" id="out_match_'+i+'">';
					for(var k=1;k<=nbr_out;k++)
					{
						text+='<option>Out-file '+k+'</option>';
					}
					text+='</select></div></div>';
					text+='<br>';
				}
			}
		}
	}
	
	else // pas de fichier de mapping nbr_mapping==0
	{
		for(var i=1;i<=nbr_struc;i++) // on regroupe les out-files ayant la même strcuture
		{
			text+='<span>Structure '+i+'</span></br>';
			for(var j=1;j<=nbr_out;j++) // on va se balader sur l'array et retenir les out-files qui ont la même structure
			{
				if(array[2*j-2]==i)
				{
					//alert('jesuila');
					if(j==1) // on coche la out strcuture 1 par défaut
					{
						text+='<input type="checkbox" id="checkBoxOutSetting_'+j+'" checked=true>Out-File '+j+'</br>';
					}
					else
					{
						text+='<input type="checkbox" id="checkBoxOutSetting_'+j+'">Out-File '+j+'</br>';
					}
				}
			}
			text+='<br>';
		}
	}
	
	text+='<br>\
			<p>Choose the out files you will use for this new process. Be carefull, you can only choose out-files with the same structure</p>';
			
	text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
						  <input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'out_file_choice_div\',\'mapping_file_settings\');">\
						  <input type="button" id="continueBTN2" value="Continue" class="btn btn-primary" onclick="storeOutFileChoice();">\
						</div>\
                    </div>';
			
	document.getElementById('out_file_choice_div').innerHTML=text;

}



function checkBoxesMappingSetting()
{
	var nbr_struc=localStorage.getItem("cpt_mapping_struc");
	var nbr_mapping=document.getElementById('mapping_file_number').value;
	var text='<label>';
	var array=localStorage.getItem("array_mapping");  // vecteur associant une strcuture a chaque fichier choisi par l'utilisateur
	
	
	
	for(var i=1;i<=nbr_struc;i++) // on regroupe les mapping-files ayant la même strcuture
	{
		text+='<span>Structure '+i+'</span></br>';
		for(var j=1;j<=nbr_mapping;j++) // on va se balader sur l'array et retenir les mapping-files qui ont la même structure
		{
			if(array[2*j-2]==i)
			{
				
				if(j==1) // on coche la mapping strcuture 1 par défaut
				{
					text+='<input type="checkbox" id="checkBoxMappingSetting_'+j+'" checked=true>Mapping-File '+j+'</br>';
				}
				else
				{
					text+='<input type="checkbox" id="checkBoxMappingSetting_'+j+'">Mapping-File '+j+'</br>';
				}
			}
		}
		text+='<br>';
	}
	
	text+='</label>\
				<br><br>\
			<p>Choose the mapping files you will use for this new process. Be carefull, you can only choose mapping-files with the same structure</p>';
			
	text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
						  <input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'mapping_file_settings\',\'mapping_file_processes\');storeNbrOfProcesses(-1);">\
						  <input type="button" id="continueBTN2" value="Continue" class="btn btn-primary" onclick="storeMappingFileChoice();">\
						</div>\
                    </div>';
	document.getElementById('mapping_file_settings').innerHTML=text;

}


function checkBoxesDrop(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de mapping-file (bouton Continue) avec le paramètre 1
	// modif tellz que le checked est a chaque fois celui egal au cpt !!!
	var nbr=document.getElementById('mapping_file_number').value;
	var text='<label><input type="checkbox" id="checkBoxDrop_1'+cpt+'" checked>Mapping-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxDrop_'+i+cpt+'">Mapping-File '+i+'</br>';
	}
			
	text+='</label><br>';
	document.getElementById('checkboxDrop_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_drop", cpt);
	// Retrieve
	//document.getElementById("result").innerHTML=localStorage.getItem("lastname");

}

function checkBoxesReplace(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de mapping-file (bouton Continue) avec le paramètre 1
	// modif tellz que le checked est a chaque fois celui egal au cpt !!!
	var nbr=document.getElementById('mapping_file_number').value;
	var text='<label><input type="checkbox" id="checkBoxReplace_1'+cpt+'" checked>Mapping-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxReplace_'+i+cpt+'">Mapping-File '+i+'</br>';
	}
			
	text+='</label><br>';
	document.getElementById('checkboxReplace_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_replace", cpt);
	// Retrieve
	//document.getElementById("result").innerHTML=localStorage.getItem("lastname");

}

function checkBoxesMerge(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de mapping-file (bouton Continue) avec le paramètre 1
	// modif tellz que le checked est a chaque fois celui egal au cpt !!!
	var nbr=document.getElementById('mapping_file_number').value;
	var text='<label><input type="checkbox" id="checkBoxMerge_1'+cpt+'" checked>Mapping-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxMerge_'+i+cpt+'">Mapping-File '+i+'</br>';
	}
			
	text+='</label><br>';
	document.getElementById('checkboxMerge_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_merge", cpt);
	// Retrieve
	//document.getElementById("result").innerHTML=localStorage.getItem("lastname");

}

function checkBoxesDupl(cpt)
{
	// fonction appellée lorsque l'utilisateur indique le nbre de mapping-file (bouton Continue) avec le paramètre 1
	// modif tellz que le checked est a chaque fois celui egal au cpt !!!
	var nbr=document.getElementById('mapping_file_number').value;
	var text='<label><input type="checkbox" id="checkBoxDupl_1'+cpt+'" checked>Mapping-File 1</br>';
	for(var i=2;i<=nbr;i++)
	{
		text+='<input type="checkbox" id="checkBoxDupl_'+i+cpt+'">Mapping-File '+i+'</br>';
	}
			
	text+='</label><br>';
	document.getElementById('checkboxDupl_div_'+cpt).innerHTML=text;
	
	// Store
	localStorage.setItem("cpt_dupl", cpt);
	// Retrieve
	//document.getElementById("result").innerHTML=localStorage.getItem("lastname");

}


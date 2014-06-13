
// All these functions deal with what appears dynamically on the page.

////////////////////////////////   In Files ////////////////////////////////////
function addFilesIn()
		{
			var nbr=document.getElementById('in_file_number').value;
			var text='';
			for(var i=1;i<=nbr;i++)
			{
						text+='<p class="text-info">In-File '+i+'</p>\
							<div class="form-group">\
								<label for="in_file_name'+i+'" class="col-lg-2 control-label">Name</label>\
									<div class="col-lg-10"><input type="text" class="form-control" id="in_file_name'+i+'" placeholder="ex : data">\
									</div>\
							</div>';
			}
			var i=1;
			var cpt=1;
			var next=2;
			//Possible common structure
			text+='<span class="help-block">Select files with the same in-file structure</span>\
						<div id="in_div_1">\
						<div class="checkbox" id="checkboxIn_div_1">\
							</div>\
							</br>\
							\
							<div class="form-group">\
								<label for="in_file_directory'+i+'" class="col-lg-2 control-label">Directory</label>\
									<div class="col-lg-10">\
										<input type="text" class="form-control" id="in_file_directory'+i+'" placeholder="ex : C:/Users/Desktop/NetGen/input/">\
										<span class="help-block">The directory indicates where the file is located. <span class="text-warning">If you plan to use the Web App, you can skip this field.</span></span>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="in_file_extension'+i+'" class="col-lg-2 control-label">Extension</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="in_file_extension'+i+'">\
											<option>txt</option>\
											<option>xlsx</option>\
											<option>xls</option>\
											<option>csv</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="in_file_delimiter'+i+'" class="col-lg-2 control-label">Delimiter</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="in_file_delimiter'+i+'">\
											<option>,</option>\
											<option>tab</option>\
											<option>/</option>\
											<option>|</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="in_file_quote'+i+'" class="col-lg-2 control-label">Quote</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="in_file_quote'+i+'">\
											<option>off</option>\
											<option>on</option>\
										</select>\
										<span class="help-block">Choose on if entries are quoted: "entry_value"</span>\
									</div>\
							</div>\
							<div class="form-group">\
								<label for="in_file_missing_value'+i+'" class="col-lg-2 control-label">Missing value</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="in_file_missing_value'+i+'">\
										<option>NaN</option>\
										<option>NA</option>\
										<option></option>\
										<option>""</option>\
									</select>\
									<span class="help-block">Indicate how missing values are recorded</span>\
									</div>\
							</div>\
							<div class="form-group">\
							<div class="col-lg-10 col-lg-offset-2">\
									<input type="button" id="newInStructureBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureIn('+next+')">\
									<input type="button" id="removeInStructureBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureIn('+cpt+')">\
								</div>\
							</div>\
							</div>\
						</div>'; // in_div_1 fermee
						
			text+='	<div id="in_div_2">\
					</div>\
					<div id="in_div_3">\
					</div>\
					<div id="in_div_4">\
					</div>\
					<div id="in_div_5">\
					</div>\
					<div id="in_div_6">\
					</div>\
					<div id="in_div_7">\
					</div>\
					<div id="in_div_8">\
					</div>\
					<div id="in_div_9">\
					</div>\
					<div id="in_div_10">\
					</div>\
					<div id="in_div_11">\
					</div>\
					<div id="in_div_12">\
					</div>\
					<div id="in_div_13">\
					</div>\
					<div id="in_div_14">\
					</div>\
					<div id="in_div_15">\
					</div>\
					<div id="in_div_16">\
					</div>\
					<div id="in_div_17">\
					</div>\
					<div id="in_div_18">\
					</div>\
					<div id="in_div_19">\
					</div>\
					<div id="in_div_20">\
					</div>\
					<div id="in_div_21">\
					</div>\
					<div id="in_div_22">\
					</div>\
					<div id="in_div_23">\
					</div>\
					<div id="in_div_24">\
					</div>\
					<div id="in_div_25">\
					</div>\
					<div id="in_div_26">\
					</div>\
					<div id="in_div_27">\
					</div>\
					<div id="in_div_28">\
					</div>\
					<div id="in_div_29">\
					</div>\
					<div id="in_div_30">\
					</div>';

			text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
							<input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'in_file_information_div\',\'in_file_number_div\');progressBarBack()">\
							<input type="button" id="submitBTN1" value="Submit" class="btn btn-primary" onclick="CheckIn();">\
						</div>\
				   </div>';
			document.getElementById('in_file_information_div').innerHTML=text;
		}
		
		

			
function addDataStructureIn(cpt)
{
	//cpt counts the number of in structures in order to adress the right ids
	//nbr is the maximum number allowed of in structures (number of infiles)
	// if all checkboxes are checked, no need to add a data structure + dont check twice a structure for one file
	var nbr=document.getElementById('in_file_number').value;

	if(!nbr)
	{alert('First indicate the number of in-files');}
	else if(cpt>nbr)
	{alert('Too many In Data Structure');}
	else
	{
	var next=cpt+1;
	var prec=cpt-1;
	var text='<div id="in_div_1">\
						<div class="checkbox" id="checkboxIn_div_'+cpt+'">\
							</div>\
							</br>\
							\
							<div class="form-group">\
								<label for="in_file_directory'+cpt+'" class="col-lg-2 control-label">Directory</label>\
									<div class="col-lg-10">\
										<input type="text" class="form-control" id="in_file_directory'+cpt+'" placeholder="ex : C:/Users/Desktop/NetGen/input/">\
										<span class="help-block">The directory indicates where the file is located. <span class="text-warning">If you plan to use the Web App, you can skip this field.</span></span>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="in_file_extension'+cpt+'" class="col-lg-2 control-label">Extension</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="in_file_extension'+cpt+'">\
											<option>txt</option>\
											<option>xlsx</option>\
											<option>xls</option>\
											<option>csv</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="in_file_delimiter'+cpt+'" class="col-lg-2 control-label">Delimiter</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="in_file_delimiter'+cpt+'">\
											<option>,</option>\
											<option>tab</option>\
											<option>/</option>\
											<option>|</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="in_file_quote'+cpt+'" class="col-lg-2 control-label">Quote</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="in_file_quote'+cpt+'">\
											<option>off</option>\
											<option>on</option>\
										</select>\
										<span class="help-block">Choose on if entries are quoted: "entry_value"</span>\
									</div>\
							</div>\
							<div class="form-group">\
								<label for="in_file_missing_value'+cpt+'" class="col-lg-2 control-label">Missing value</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="in_file_missing_value'+cpt+'">\
										<option>NaN</option>\
										<option>NA</option>\
										<option></option>\
										<option>""</option>\
									</select>\
									<span class="help-block">Indicate how missing values are recorded</span>\
									</div>\
							</div>\
							<div class="form-group">\
							<div class="col-lg-10 col-lg-offset-2">\
									<input type="button" id="newInStructureBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureIn('+next+')">\
									<input type="button" id="removeInStructureBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureIn('+cpt+')">\
								</div>\
							</div>\
							</div>\
						</div>';
	
	
	//hide precendent addstructure button
	document.getElementById('newInStructureBTN'+prec).style.display='none';
	document.getElementById('removeInStructureBTN'+prec).style.display='none';
	document.getElementById('in_div_'+cpt).innerHTML=text;
	checkBoxesIn(cpt);
	}
}

function removeDataStructureIn(cpt)
{
	if(cpt==1)
	{alert("Set a least one in data structure");}
	else
	{
		var prec=cpt-1;
		document.getElementById('newInStructureBTN'+prec).style.display='block';
		document.getElementById('removeInStructureBTN'+prec).style.display='block';
		document.getElementById('in_div_'+cpt).innerHTML='';
		localStorage.setItem("cpt_in", prec);
	}
}	



//////////////////////////////////////////// Raw structure///////////////////////

function addDataStructureRaw(cpt)
{
	//cpt counts the number of raw structures in order to adress the right ids
	//nbr is the maximum number allowed of raw structures (number of infiles)
	// if all checkboxes are checked, no need to add a data structure + dont check twice a structure for one file
	var nbr=document.getElementById('in_file_number').value;
	//var nbr=3;
	//alert("ok"); 
	if(!nbr)
	{alert('First indicate the number of in-files');} 
	else if(cpt>nbr)
	{alert('Too many Raw Data Structure');}
	else
	{
	var next=cpt+1;
	var prec=cpt-1;
	var text='<div class="checkbox" id="checkboxRaw_div_'+cpt+'">\
                <label>\
                   <input type="checkbox" checked>File 1\
                </label>\
			</div>	\
			\
			</br>\
            <div class="bs-example table-responsive">\
              <table class="table table-striped table-bordered table-hover">\
                <tbody id="RawList'+cpt+'">\
                  <tr id="tr1_Raw'+cpt+'">\
                    <td><strong>Column #</strong></td>\
                    <td> \
						1\
					</td>\
                  </tr>\
				  <tr id="tr2_Raw'+cpt+'">\
                    <td><strong>Name</strong></td>\
                    <td> \
						<div class="form-group">\
							<div class="col-lg-12">\
							  <input type="text" class="form-control" id="tr1_Name_Raw'+cpt+'" placeholder="ex : From">\
							</div>\
						</div>\
					</td>\
                  </tr>\
				  <tr id="tr3_Raw'+cpt+'">\
                    <td><strong>Type</strong></td>\
                    <td>\
						<div class="form-group">\
							<div class="col-lg-12">\
								<select class="form-control" id="tr1_Type_Raw'+cpt+'">\
									<option>str</option>\
									<option>float</option>\
									<option>int</option>\
									<option>date</option>\
								</select>\
							</div>\
						</div>\
					</td>\
                  </tr>\
                </tbody>\
              </table>\
            </div>\
			      \
                  <div class="form-group">\
				    <div class="col-lg-10 col-lg-offset-2">\
					<input type="button" id="removeBTN'+cpt+'" value="Remove field" class="btn btn-default" onclick="removeFieldRaw(\'tr1_Raw'+cpt+'\','+cpt+')">\
					<input type="button" id="addBTN'+cpt+'" value="Add field" class="btn btn-primary" onclick="addFieldRaw(\'tr1_Raw'+cpt+'\','+cpt+')">\
						</br></br>\
					  <input type="button" id="newRawStructureBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureRaw('+next+');">\
					  <input type="button" id="removeRawStructureBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureRaw('+cpt+');">\
                    </div>\
				 </div>';
	
	
	//hide precendent addstructure button
	document.getElementById('newRawStructureBTN'+prec).style.display='none';
	document.getElementById('removeRawStructureBTN'+prec).style.display='none';
	document.getElementById('raw_div_'+cpt).innerHTML=text;
	checkBoxesRaw(cpt);
	
	localStorage.setItem("cpt_in_fields"+cpt, 1);  //la nouvelle structure a au moins un champs
	}
}

function removeDataStructureRaw(cpt)
{
	if(cpt==1)
	{alert("Set a least one raw data structure");}
	else
	{
		var prec=cpt-1;
		document.getElementById('newRawStructureBTN'+prec).style.display='block';
		document.getElementById('removeRawStructureBTN'+prec).style.display='block';
		document.getElementById('raw_div_'+cpt).innerHTML='';
		localStorage.setItem("cpt_in_fields"+cpt, 0); //on vient de deleter la structure
		localStorage.setItem("cpt_raw", prec);
	}
}	


function addFieldRaw(idList,cpt_raw)
{
		//alert("ok");
		//alert(idList);   RawList1
		//alert(cpt_raw);   1 au premier click
		var list=document.getElementById(idList);
		var nbr_in=document.getElementById('in_file_number').value;
		//var nbr_in=3; 
		//alert(leng); 
		var nbr=list.childNodes.length; 
		//alert(nbr); 7e node au premier click 8e au 2e   7   8   9
		var cpt=(nbr-3);
		//alert(cpt);  //2   3    4
		//var node=document.createElement("tr");
		//node.setAttribute("id", "tr"+cpt+"_Raw"+cpt_raw);
		//var textnode=document.createTextNode("empty");

		//node.appendChild(textnode);
		//document.getElementById(idList).appendChild(node);
		
		
		for(var i=1;i<=3;i++)
		{
			idList='tr'+i+'_Raw'+cpt_raw;
			var node=document.createElement("td");
			
			if(i==1) // #
			{
			var text=cpt;
			node.setAttribute("id", "td"+cpt+"_RawNbr"+cpt_raw);
			var textnode=document.createTextNode("empty");
		
			node.appendChild(textnode);
			document.getElementById(idList).appendChild(node);
			document.getElementById("td"+cpt+"_RawNbr"+cpt_raw).innerHTML=text;
			}
			else if(i==2)
			{
			node.setAttribute("id", "td"+cpt+"_RawName"+cpt_raw);
			var text = '<div class="form-group">\
								<div class="col-lg-12">\
									<input type="text" class="form-control" id="tr'+cpt+'_Name_Raw'+cpt_raw+'" placeholder="ex : From">\
								</div>\
							</div>';
			var textnode=document.createTextNode("empty");
		
			node.appendChild(textnode);
			document.getElementById(idList).appendChild(node);
			document.getElementById("td"+cpt+"_RawName"+cpt_raw).innerHTML=text;
			}
			else{
			node.setAttribute("id", "td"+cpt+"_RawType"+cpt_raw);
			var text = '<div class="form-group">\
								<div class="col-lg-12">\
									<select class="form-control" id="tr'+cpt+'_Type_Raw'+cpt_raw+'">\
										<option>str</option>\
										<option>float</option>\
										<option>int</option>\
										<option>date</option>\
									</select>\
								</div>\
							</div>';
			var textnode=document.createTextNode("empty");
		
			node.appendChild(textnode);
			document.getElementById(idList).appendChild(node);
			document.getElementById("td"+cpt+"_RawType"+cpt_raw).innerHTML=text;
			}
		}
		localStorage.setItem("cpt_in_fields"+cpt_raw, cpt);
}

		
function removeFieldRaw(idList,cpt_raw)
{
		var list=document.getElementById(idList);   // list = tr Nbr
		//alert(leng);
		var nbr=list.childNodes.length;
		var cpt=(nbr-4);
		//alert(nbr);  5 4 3
		//alert(cpt);
		
		if (cpt!=1)
		{

			document.getElementById('td'+cpt+'_RawNbr'+cpt_raw).innerHTML = '';
			document.getElementById('td'+cpt+'_RawName'+cpt_raw).innerHTML = '';
			document.getElementById('td'+cpt+'_RawType'+cpt_raw).innerHTML = '';
			list.removeChild(list.childNodes[nbr-1]);
			list=document.getElementById('tr2_Raw'+cpt_raw);  // list = tr Name
			list.removeChild(list.childNodes[nbr-1]);
			list=document.getElementById('tr3_Raw'+cpt_raw);   // list = tr Type
			list.removeChild(list.childNodes[nbr-1]);
			
			localStorage.setItem("cpt_in_fields"+cpt_raw, cpt-1);
		}
		else
		{
			alert("Set at least one field");
		}
		
}

//////////////////////////////////////////////////// Out Files /////////////////////
		
function addFilesOut()
		{
			var nbr=document.getElementById('in_file_number').value;
			var text='';
			for(var i=1;i<=nbr;i++)
			{
						text+='<p class="text-info">Out-File '+i+'</p>\
							<div class="form-group">\
								<label for="out_file_name'+i+'" class="col-lg-2 control-label">Name</label>\
									<div class="col-lg-10"><input type="text" class="form-control" id="out_file_name'+i+'" placeholder="ex : data">\
									</div>\
							</div>';
			}
			var i=1;
			var cpt=1;
			var next=2;
			//Possible common structure
			text+='<span class="help-block">Select files with the same out-file structure</span>\
						<div id="out_div_1">\
						<div class="checkbox" id="checkboxOut_div_1">\
							</div>\
							</br>\
							\
							<div class="form-group">\
								<label for="out_file_directory'+i+'" class="col-lg-2 control-label">Directory</label>\
									<div class="col-lg-10">\
										<input type="text" class="form-control" id="out_file_directory'+i+'" placeholder="ex : C:/Users/Desktop/NetGen/input/">\
										<span class="help-block">The directory indicates where the file will be written. <span class="text-warning">If you plan to use the Web App, you can skip this field.</span></span>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_extension'+i+'" class="col-lg-2 control-label">Extension</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_extension'+i+'">\
											<option>txt</option>\
											<option>xlsx</option>\
											<option>xls</option>\
											<option>csv</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_delimiter'+i+'" class="col-lg-2 control-label">Delimiter</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_delimiter'+i+'">\
											<option>,</option>\
											<option>tab</option>\
											<option>/</option>\
											<option>|</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_missing_value'+i+'" class="col-lg-2 control-label">Missing value</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_missing_value'+i+'">\
										<option>NaN</option>\
										<option>NA</option>\
										<option></option>\
										<option>""</option>\
									</select>\
									<span class="help-block">Indicate how missing values are recorded</span>\
									</div>\
							</div>\
							<div class="form-group">\
							<div class="col-lg-10 col-lg-offset-2">\
									<input type="button" id="newOutStructureBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureOut('+next+')">\
									<input type="button" id="removeOutStructureBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureOut('+cpt+')">\
								</div>\
							</div>\
							</div>\
						</div>'; // out_div_1 fermee
						
			text+='	<div id="out_div_2">\
					</div>\
					<div id="out_div_3">\
					</div>\
					<div id="out_div_4">\
					</div>\
					<div id="out_div_5">\
					</div>\
					<div id="out_div_6">\
					</div>\
					<div id="out_div_7">\
					</div>\
					<div id="out_div_8">\
					</div>\
					<div id="out_div_9">\
					</div>\
					<div id="out_div_10">\
					</div>\
					<div id="out_div_11">\
					</div>\
					<div id="out_div_12">\
					</div>\
					<div id="out_div_13">\
					</div>\
					<div id="out_div_14">\
					</div>\
					<div id="out_div_15">\
					</div>\
					<div id="out_div_16">\
					</div>\
					<div id="out_div_17">\
					</div>\
					<div id="out_div_18">\
					</div>\
					<div id="out_div_19">\
					</div>\
					<div id="out_div_20">\
					</div>\
					<div id="out_div_21">\
					</div>\
					<div id="out_div_22">\
					</div>\
					<div id="out_div_23">\
					</div>\
					<div id="out_div_24">\
					</div>\
					<div id="out_div_25">\
					</div>\
					<div id="out_div_26">\
					</div>\
					<div id="out_div_27">\
					</div>\
					<div id="out_div_28">\
					</div>\
					<div id="out_div_29">\
					</div>\
					<div id="out_div_30">\
					</div>';

			text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
							<input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'out_file_information_div\',\'out_file_pre_option\');progressBarBack()">\
							<input type="button" id="submitBTN1" value="Submit" class="btn btn-primary" onclick="CheckOut();updateFields();">\
						</div>\
				   </div>';
			document.getElementById('out_file_information_div').innerHTML=text;
		}

function addFilesOutOn()
		{
			var nbr=document.getElementById('in_file_number').value;
			var text='';
			for(var i=1;i<=1;i++)   // un seul tour de boucle (le for pas du tout nécessaire)
			{
						text+='<p class="text-info">Single Out-File</p>\
							<div class="form-group">\
								<label for="out_file_name'+i+'" class="col-lg-2 control-label">Name</label>\
									<div class="col-lg-10"><input type="text" class="form-control" id="out_file_name'+i+'" placeholder="ex : data">\
									</div>\
							</div>\
							<div class="form-group">\
								<label for="out_file_directory'+i+'" class="col-lg-2 control-label">Directory</label>\
									<div class="col-lg-10">\
										<input type="text" class="form-control" id="out_file_directory'+i+'" placeholder="ex : C:/Users/Desktop/NetGen/input/">\
										<span class="help-block">The directory indicates where the file will be written. <span class="text-warning">If you plan to use the Web App, you can skip this field.</span></span>\
									</div>\
							</div>\
							\
							  <div id="out_file_separate_line_div" class="form-group">\
								<label for="out_file_separate_line'+i+'" class="col-lg-2 control-label">Separation line</label>\
								<div class="col-lg-10">\
								  <input type="text" class="form-control" id="out_file_separate_line'+i+'" placeholder="ex : New File" >\
									<span class="help-block">Define a separation between the results of the datasets</br>\
									- leave blank will not do any separation</br>\
									- write "title" will write down the name of the input file</br>\
									- or write your own separation line</span>\
								</div>\
							  </div>';
			}
			var i=1;
			var cpt=1;
			var next=2;
			//Possible common structure
			text+='<span class="help-block">Select files with the same out-file structure</span>\
						<div id="out_div_1">\
						<div class="checkbox" id="checkboxOut_div_1">\
							</div>\
							</br>\
							<div class="form-group">\
								<label for="out_file_extension'+i+'" class="col-lg-2 control-label">Extension</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_extension'+i+'">\
											<option>txt</option>\
											<option>xlsx</option>\
											<option>xls</option>\
											<option>csv</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_delimiter'+i+'" class="col-lg-2 control-label">Delimiter</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_delimiter'+i+'">\
											<option>,</option>\
											<option>tab</option>\
											<option>/</option>\
											<option>|</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_missing_value'+i+'" class="col-lg-2 control-label">Missing value</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_missing_value'+i+'">\
										<option>NaN</option>\
										<option>NA</option>\
										<option></option>\
										<option>""</option>\
									</select>\
									<span class="help-block">Indicate how missing values are recorded</span>\
									</div>\
							</div>\
							<div class="form-group">\
							<div class="col-lg-10 col-lg-offset-2">\
									<input type="button" id="newOutStructureOnBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureOutOn('+next+')">\
									<input type="button" id="removeOutStructureOnBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureOutOn('+cpt+')">\
								</div>\
							</div>\
							</div>\
						</div>'; // out_div_1 fermee
						
			text+='	<div id="out_div_2">\
					</div>\
					<div id="out_div_3">\
					</div>\
					<div id="out_div_4">\
					</div>\
					<div id="out_div_5">\
					</div>\
					<div id="out_div_6">\
					</div>\
					<div id="out_div_7">\
					</div>\
					<div id="out_div_8">\
					</div>\
					<div id="out_div_9">\
					</div>\
					<div id="out_div_10">\
					</div>\
					<div id="out_div_11">\
					</div>\
					<div id="out_div_12">\
					</div>\
					<div id="out_div_13">\
					</div>\
					<div id="out_div_14">\
					</div>\
					<div id="out_div_15">\
					</div>\
					<div id="out_div_16">\
					</div>\
					<div id="out_div_17">\
					</div>\
					<div id="out_div_18">\
					</div>\
					<div id="out_div_19">\
					</div>\
					<div id="out_div_20">\
					</div>\
					<div id="out_div_21">\
					</div>\
					<div id="out_div_22">\
					</div>\
					<div id="out_div_23">\
					</div>\
					<div id="out_div_24">\
					</div>\
					<div id="out_div_25">\
					</div>\
					<div id="out_div_26">\
					</div>\
					<div id="out_div_27">\
					</div>\
					<div id="out_div_28">\
					</div>\
					<div id="out_div_29">\
					</div>\
					<div id="out_div_30">\
					</div>';

			text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
							<input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'out_file_information_div\',\'out_file_pre_option\');progressBarBack()">\
							<input type="button" id="submitBTN1" value="Submit" class="btn btn-primary" onclick="CheckOut();updateFields();">\
						</div>\
				   </div>';
			document.getElementById('out_file_information_div').innerHTML=text;
		}
		
	
function addDataStructureOut(cpt)
{
	//cpt counts the number of in structures in order to adress the right ids
	//nbr is the maximum number allowed of in structures (number of infiles)
	// if all checkboxes are checked, no need to add a data structure + dont check twice a structure for one file
	var nbr=document.getElementById('in_file_number').value;

	if(!nbr)
	{alert('First indicate the number of out-files');}
	else if(cpt>nbr)
	{alert('Too many Out Data Structure');}
	else
	{
	var next=cpt+1;
	var prec=cpt-1;
	var text='<div id="out_div_1">\
						<div class="checkbox" id="checkboxOut_div_'+cpt+'">\
							</div>\
							</br>\
							\
							<div class="form-group">\
								<label for="out_file_directory'+cpt+'" class="col-lg-2 control-label">Directory</label>\
									<div class="col-lg-10">\
										<input type="text" class="form-control" id="out_file_directory'+cpt+'" placeholder="ex : C:/Users/Desktop/NetGen/output/">\
										<span class="help-block">The directory indicates where the file will be written. <span class="text-warning">If you plan to use the Web App, you can skip this field.</span></span>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_extension'+cpt+'" class="col-lg-2 control-label">Extension</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_extension'+cpt+'">\
											<option>txt</option>\
											<option>xlsx</option>\
											<option>xls</option>\
											<option>csv</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_delimiter'+cpt+'" class="col-lg-2 control-label">Delimiter</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_delimiter'+cpt+'">\
											<option>,</option>\
											<option>tab</option>\
											<option>/</option>\
											<option>|</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_missing_value'+cpt+'" class="col-lg-2 control-label">Missing value</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_missing_value'+cpt+'">\
										<option>NaN</option>\
										<option>NA</option>\
										<option></option>\
										<option>""</option>\
									</select>\
									<span class="help-block">Indicate how missing values are recorded</span>\
									</div>\
							</div>\
							<div class="form-group">\
							<div class="col-lg-10 col-lg-offset-2">\
									<input type="button" id="newOutStructureBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureOut('+next+')">\
									<input type="button" id="removeOutStructureBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureOut('+cpt+')">\
								</div>\
							</div>\
							</div>\
						</div>';
	
	
	//hide precendent addstructure button
	document.getElementById('newOutStructureBTN'+prec).style.display='none';
	document.getElementById('removeOutStructureBTN'+prec).style.display='none';
	document.getElementById('out_div_'+cpt).innerHTML=text;
	checkBoxesOut(cpt);
	}
}

function removeDataStructureOut(cpt)
{
	if(cpt==1)
	{alert("Set a least one out data structure");}
	else
	{
		var prec=cpt-1;
		document.getElementById('newOutStructureBTN'+prec).style.display='block';
		document.getElementById('removeOutStructureBTN'+prec).style.display='block';
		document.getElementById('out_div_'+cpt).innerHTML='';
		localStorage.setItem("cpt_out", prec);
		
	}
}	

function addDataStructureOutOn(cpt)
{
	//cpt counts the number of in structures in order to adress the right ids
	//nbr is the maximum number allowed of in structures (number of infiles)
	// if all checkboxes are checked, no need to add a data structure + dont check twice a structure for one file
	var nbr=document.getElementById('in_file_number').value;

	if(!nbr)
	{alert('First indicate the number of out-files');}
	else if(cpt>nbr)
	{alert('Too many Out Data Structure');}
	else
	{
	var next=cpt+1;
	var prec=cpt-1;
	var text='<div id="out_div_1">\
						<div class="checkbox" id="checkboxOut_div_'+cpt+'">\
							</div>\
							</br>\
							<div class="form-group">\
								<label for="out_file_extension'+cpt+'" class="col-lg-2 control-label">Extension</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_extension'+cpt+'">\
											<option>txt</option>\
											<option>xlsx</option>\
											<option>xls</option>\
											<option>csv</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_delimiter'+cpt+'" class="col-lg-2 control-label">Delimiter</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_delimiter'+cpt+'">\
											<option>,</option>\
											<option>tab</option>\
											<option>/</option>\
											<option>|</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="out_file_missing_value'+cpt+'" class="col-lg-2 control-label">Missing value</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="out_file_missing_value'+cpt+'">\
										<option>NaN</option>\
										<option>NA</option>\
										<option></option>\
										<option>""</option>\
									</select>\
									<span class="help-block">Indicate how missing values are recorded</span>\
									</div>\
							</div>\
							<div class="form-group">\
							<div class="col-lg-10 col-lg-offset-2">\
									<input type="button" id="newOutStructureOnBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureOutOn('+next+')">\
									<input type="button" id="removeOutStructureOnBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureOutOn('+cpt+')">\
								</div>\
							</div>\
							</div>\
						</div>';
	
	
	//hide precendent addstructure button
	document.getElementById('newOutStructureOnBTN'+prec).style.display='none';
	document.getElementById('removeOutStructureOnBTN'+prec).style.display='none';
	document.getElementById('out_div_'+cpt).innerHTML=text;
	checkBoxesOut(cpt);
	}
}


function removeDataStructureOutOn(cpt)
{
	if(cpt==1)
	{alert("Set a least one out data structure");}
	else
	{
		var prec=cpt-1;
		document.getElementById('newOutStructureOnBTN'+prec).style.display='block';
		document.getElementById('removeOutStructureOnBTN'+prec).style.display='block';
		document.getElementById('out_div_'+cpt).innerHTML='';
		localStorage.setItem("cpt_out", prec);
	}
}	

		
///////////////////////////////////////////// Clean Structure /////////////////////

function updateFields()
{
	var nbr=document.getElementById('in_file_number').value;
	var cpt_raw=localStorage.getItem('cpt_raw');
	
	for(var j=1;j<=cpt_raw;j++)
	{
		if(j!=1)
		{addDataStructureClean(j);}
		
		var cpt_fields=localStorage.getItem('cpt_in_fields'+j);;
		
		for(var i=1;i<=cpt_fields;i++)
		{
			if(i!=cpt_fields)
			{addFieldClean('tr1_Clean'+j,j);}
			
			var name=document.getElementById('tr'+i+'_Name_Raw'+j).value;
			document.getElementById('tr'+i+'_Name_Clean'+j).value=name;
			var type=document.getElementById('tr'+i+'_Type_Raw'+j).value;
			document.getElementById('tr'+i+'_Type_Clean'+j).value=type;
		}
	}

}

function addDataStructureClean(cpt)
{
	//cpt counts the number of clean structures in order to adress the right ids
	//nbr is the maximum number allowed of clean structures (number of infiles)
	// if all checkboxes are checked, no need to add a data structure + dont check twice a structure for one file
	var nbr=document.getElementById('in_file_number').value;
	//var nbr=3;
	//alert("ok"); 
	if(!nbr)
	{alert('First indicate the number of in-files');} 
	else if(cpt>nbr)
	{alert('Too many Clean Data Structure');}
	else
	{
	var next=cpt+1;
	var prec=cpt-1;
	var text='<div class="checkbox" id="checkboxClean_div_'+cpt+'">\
                <label>\
                   <input type="checkbox" checked>File 1\
                </label>\
			</div>	\
			\
			</br>\
            <div class="bs-example table-responsive">\
			<span class="help-block">Uncheck fields you don\'t want to keep</span>\
              <table class="table table-striped table-bordered table-hover">\
                <tbody id="CleanList'+cpt+'">\
                  <tr id="tr1_Clean'+cpt+'">\
                    <td><strong>Column #</strong></td>\
                    <td> \
						1\
					</td>\
                  </tr>\
				  <tr id="tr2_Clean'+cpt+'">\
                    <td><strong>Name</strong></td>\
                    <td> \
						<div class="form-group">\
							<div class="col-lg-12">\
							  <input type="text" class="form-control" id="tr1_Name_Clean'+cpt+'" placeholder="ex : From">\
							</div>\
						</div>\
					</td>\
                  </tr>\
				  <tr id="tr3_Clean'+cpt+'">\
                    <td><strong>Type</strong></td>\
                    <td>\
						<div class="form-group">\
							<div class="col-lg-12">\
								<select class="form-control" id="tr1_Type_Clean'+cpt+'">\
									<option>str</option>\
									<option>float</option>\
									<option>int</option>\
									<option>date</option>\
								</select>\
							</div>\
						</div>\
					</td>\
                  </tr>\
				  <tr id="tr4_Clean'+cpt+'">\
                    <td><strong>Kept</strong></td>\
                    <td>\
						<div class="form-group">\
							<div class="col-lg-12">\
								<input type="checkbox" id="tr1_checkBoxCleanKept_'+cpt+'" checked>\
							</div>\
						</div>\
					</td>\
                  </tr>\
                </tbody>\
              </table>\
            </div>\
			      \
                  <div class="form-group">\
				    <div class="col-lg-10 col-lg-offset-2">\
					<input type="button" id="removeBTN'+cpt+'" value="Remove field" class="btn btn-default" onclick="removeFieldClean(\'tr1_Clean'+cpt+'\','+cpt+')">\
					<input type="button" id="addBTN'+cpt+'" value="Add field" class="btn btn-primary" onclick="addFieldClean(\'tr1_Clean'+cpt+'\','+cpt+')">\
						</br></br>\
					  <input type="button" id="newCleanStructureBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureClean('+next+');">\
					  <input type="button" id="removeCleanStructureBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureClean('+cpt+');">\
                    </div>\
				 </div>';
	
	
	//hide precendent addstructure button
	document.getElementById('newCleanStructureBTN'+prec).style.display='none';
	document.getElementById('removeCleanStructureBTN'+prec).style.display='none';
	document.getElementById('clean_div_'+cpt).innerHTML=text;
	checkBoxesClean(cpt);
	
	localStorage.setItem("cpt_out_fields"+cpt, 1);  //la nouvelle structure a au moins un champs
	}
}


function removeDataStructureClean(cpt) 
{
	if(cpt==1)
	{alert("Set a least one clean data structure");}
	else
	{
		var prec=cpt-1;
		document.getElementById('newCleanStructureBTN'+prec).style.display='block';
		document.getElementById('removeCleanStructureBTN'+prec).style.display='block';
		document.getElementById('clean_div_'+cpt).innerHTML='';
		localStorage.setItem("cpt_out_fields"+cpt, 0); //on vient de deleter la structure
		localStorage.setItem("cpt_clean", prec);
	}
}	


function addFieldClean(idList,cpt_clean)
{
		//alert("ok");
		//alert(idList);   CleanList1
		//alert(cpt_clean);   1 au premier click
		var list=document.getElementById(idList);
		var nbr_in=document.getElementById('in_file_number').value;
		//var nbr_in=3; 
		//alert(leng); 
		var nbr=list.childNodes.length; 
		//alert(nbr); 7e node au premier click 8e au 2e   7   8   9
		var cpt=(nbr-3);
		//alert(cpt);  //2   3    4
		//var node=document.createElement("tr");
		//node.setAttribute("id", "tr"+cpt+"_Clean"+cpt_clean);
		//var textnode=document.createTextNode("empty");

		//node.appendChild(textnode);
		//document.getElementById(idList).appendChild(node);
		
		
		for(var i=1;i<=4;i++)
		{
			idList='tr'+i+'_Clean'+cpt_clean;
			var node=document.createElement("td");
			
			if(i==1) // #
			{
			var text=cpt;
			node.setAttribute("id", "td"+cpt+"_CleanNbr"+cpt_clean);
			var textnode=document.createTextNode("empty");
		
			node.appendChild(textnode);
			document.getElementById(idList).appendChild(node);
			document.getElementById("td"+cpt+"_CleanNbr"+cpt_clean).innerHTML=text;
			}
			else if(i==2)
			{
			node.setAttribute("id", "td"+cpt+"_CleanName"+cpt_clean);
			var text = '<div class="form-group">\
								<div class="col-lg-12">\
									<input type="text" class="form-control" id="tr'+cpt+'_Name_Clean'+cpt_clean+'" placeholder="ex : From">\
								</div>\
							</div>';
			var textnode=document.createTextNode("empty");
		
			node.appendChild(textnode);
			document.getElementById(idList).appendChild(node);
			document.getElementById("td"+cpt+"_CleanName"+cpt_clean).innerHTML=text;
			}
			else if(i==3)
			{
			node.setAttribute("id", "td"+cpt+"_CleanType"+cpt_clean);
			var text = '<div class="form-group">\
								<div class="col-lg-12">\
									<select class="form-control" id="tr'+cpt+'_Type_Clean'+cpt_clean+'">\
										<option>str</option>\
										<option>float</option>\
										<option>int</option>\
										<option>date</option>\
									</select>\
								</div>\
							</div>';
			var textnode=document.createTextNode("empty");
		
			node.appendChild(textnode);
			document.getElementById(idList).appendChild(node);
			document.getElementById("td"+cpt+"_CleanType"+cpt_clean).innerHTML=text;
			}
			else
			{
			node.setAttribute("id", "td"+cpt+"_CleanKept"+cpt_clean);
			var text = '<div class="form-group">\
								<div class="col-lg-12">\
									<input type="checkbox" id="tr'+cpt+'_checkBoxCleanKept_'+cpt_clean+'" checked>\
								</div>\
							</div>';
			var textnode=document.createTextNode("empty");
		
			node.appendChild(textnode);
			document.getElementById(idList).appendChild(node);
			document.getElementById("td"+cpt+"_CleanKept"+cpt_clean).innerHTML=text;
			}
		}
		localStorage.setItem("cpt_out_fields"+cpt_clean, cpt);
}
		
function removeFieldClean(idList,cpt_clean)
{
		var list=document.getElementById(idList);   // list = tr Nbr
		//alert(leng);
		var nbr=list.childNodes.length;
		var cpt=(nbr-4);
		//alert(nbr);  5 4 3
		//alert(cpt);
		
		if (cpt!=1)
		{

			document.getElementById('td'+cpt+'_CleanNbr'+cpt_clean).innerHTML = '';
			document.getElementById('td'+cpt+'_CleanName'+cpt_clean).innerHTML = '';
			document.getElementById('td'+cpt+'_CleanType'+cpt_clean).innerHTML = '';
			list.removeChild(list.childNodes[nbr-1]);
			list=document.getElementById('tr2_Clean'+cpt_clean);  // list = tr Name
			list.removeChild(list.childNodes[nbr-1]);
			list=document.getElementById('tr3_Clean'+cpt_clean);   // list = tr Type
			list.removeChild(list.childNodes[nbr-1]);
			list=document.getElementById('tr4_Clean'+cpt_clean);   // list = tr Kept
			list.removeChild(list.childNodes[nbr-1]);
			
			localStorage.setItem("cpt_out_fields"+cpt_clean, cpt-1);
		}
		else
		{
			alert("Set at least one field");
		}
		
}
		

///////////////////////////////   MAPPING INFO ////////////////////////
	
function addFilesMapping()
		{
			var nbr=document.getElementById('mapping_file_number').value;
			var text='';
			for(var i=1;i<=nbr;i++)
			{
						text+='<p class="text-info">Mapping-File '+i+'</p>\
							<div class="form-group">\
								<label for="mapping_file_name'+i+'" class="col-lg-2 control-label">Name</label>\
									<div class="col-lg-10"><input type="text" class="form-control" id="mapping_file_name'+i+'" placeholder="ex : data">\
									</div>\
							</div>';
			}
			var i=1;
			var cpt=1;
			var next=2;
			//Possible common structure
			text+='<br><span class="help-block">Select files with the same mapping-file structure</span>\
						<div id="mapping_div_1">\
						<div class="checkbox" id="checkboxMapping_div_1">\
							</div>\
							<div class="form-group">\
								<label for="mapping_file_directory'+i+'" class="col-lg-2 control-label">Directory</label>\
									<div class="col-lg-10">\
										<input type="text" class="form-control" id="mapping_file_directory'+i+'" placeholder="ex : C:/Users/Desktop/NetGen/input/">\
										<span class="help-block">The directory indicates where the file is located. <span class="text-warning">If you plan to use the Web App, you have to write : input/.</span></span>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="mapping_file_extension'+i+'" class="col-lg-2 control-label">Extension</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="mapping_file_extension'+i+'">\
											<option>txt</option>\
											<option>xlsx</option>\
											<option>xls</option>\
											<option>csv</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="mapping_file_delimiter'+i+'" class="col-lg-2 control-label">Delimiter</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="mapping_file_delimiter'+i+'">\
											<option>,</option>\
											<option>tab</option>\
											<option>/</option>\
											<option>|</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<div class="col-lg-10 col-lg-offset-2">\
								<br/>\
										<input type="button" id="newMappingStructureBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureMapping('+next+')">\
										<input type="button" id="removeMappingStructureBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureMapping('+cpt+')">\
									</div>\
								</div>\
							</div>\
						</div>'; // mapping_div_1 fermee
						
			text+='	<div id="mapping_div_2">\
					</div>\
					<div id="mapping_div_3">\
					</div>\
					<div id="mapping_div_4">\
					</div>\
					<div id="mapping_div_5">\
					</div>\
					<div id="mapping_div_6">\
					</div>\
					<div id="mapping_div_7">\
					</div>\
					<div id="mapping_div_8">\
					</div>\
					<div id="mapping_div_9">\
					</div>\
					<div id="mapping_div_10">\
					</div>\
					<div id="mapping_div_11">\
					</div>\
					<div id="mapping_div_12">\
					</div>\
					<div id="mapping_div_13">\
					</div>\
					<div id="mapping_div_14">\
					</div>\
					<div id="mapping_div_15">\
					</div>\
					<div id="mapping_div_16">\
					</div>\
					<div id="mapping_div_17">\
					</div>\
					<div id="mapping_div_18">\
					</div>\
					<div id="mapping_div_19">\
					</div>\
					<div id="mapping_div_20">\
					</div>\
					<div id="mapping_div_21">\
					</div>\
					<div id="mapping_div_22">\
					</div>\
					<div id="mapping_div_23">\
					</div>\
					<div id="mapping_div_24">\
					</div>\
					<div id="mapping_div_25">\
					</div>\
					<div id="mapping_div_26">\
					</div>\
					<div id="mapping_div_27">\
					</div>\
					<div id="mapping_div_28">\
					</div>\
					<div id="mapping_div_29">\
					</div>\
					<div id="mapping_div_30">\
					</div>';

			text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
							<br>\
								<input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'mapping_file_information_div\',\'mapping_file_number_div\');progressBarBack()">\
							<input type="button" id="submitBTN1" value="Submit" class="btn btn-primary" onclick="ShowHideDivMappingInfo()">\
						</div>\
				   </div>';
			document.getElementById('mapping_file_information_div').innerHTML=text;
		}
	
function addDataStructureMapping(cpt) // il s'agit de la strucure des infos des fichiers de mappings (delimiter extension etc.)
{
	//cpt counts the number of in structures in order to adress the right ids
	//nbr is the maximum number allowed of in structures (number of infiles)
	// if all checkboxes are checked, no need to add a data structure + dont check twice a structure for one file
	var nbr=document.getElementById('mapping_file_number').value;

	if(!nbr)
	{alert('First indicate the number of mapping-files');}
	else if(cpt>nbr)
	{alert('Too many Mapping Data Structure');}
	else
	{
	var next=cpt+1;
	var prec=cpt-1;
	var text='<div id="mapping_div_1">\
						<div class="checkbox" id="checkboxMapping_div_'+cpt+'">\
							</div>\
							<div class="form-group">\
								<label for="mapping_file_directory'+cpt+'" class="col-lg-2 control-label">Directory</label>\
									<div class="col-lg-10">\
										<input type="text" class="form-control" id="mapping_file_directory'+cpt+'" placeholder="ex : C:/Users/Desktop/NetGen/output/">\
										<span class="help-block">The directory indicates where the file is located. <span class="text-warning">If you plan to use the Web App, you have to write : input/.</span></span>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="mapping_file_extension'+cpt+'" class="col-lg-2 control-label">Extension</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="mapping_file_extension'+cpt+'">\
											<option>txt</option>\
											<option>xlsx</option>\
											<option>xls</option>\
											<option>csv</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
								<label for="mapping_file_delimiter'+cpt+'" class="col-lg-2 control-label">Delimiter</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="mapping_file_delimiter'+cpt+'">\
											<option>,</option>\
											<option>tab</option>\
											<option>/</option>\
											<option>|</option>\
										</select>\
									</div>\
								</div>\
							<div class="form-group">\
							<div class="col-lg-10 col-lg-offset-2">\
							</br>\
									<input type="button" id="newMappingStructureBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureMapping('+next+')">\
									<input type="button" id="removeMappingStructureBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureMapping('+cpt+')">\
								</div>\
							</div>\
							</div>\
						</div>';
	
	
	//hide precendent addstructure button
	document.getElementById('newMappingStructureBTN'+prec).style.display='none';
	document.getElementById('removeMappingStructureBTN'+prec).style.display='none';
	document.getElementById('mapping_div_'+cpt).innerHTML=text;
	checkBoxesMapping(cpt);
	}
}

function removeDataStructureMapping(cpt)
{
	if(cpt==1)
	{alert("Set a least one mapping data structure");}
	else
	{
		var prec=cpt-1;
		document.getElementById('newMappingStructureBTN'+prec).style.display='block';
		document.getElementById('removeMappingStructureBTN'+prec).style.display='block';
		document.getElementById('mapping_div_'+cpt).innerHTML='';
	}
}
	
	
	
////////////////////////////////// MAPPING DATA STRUCTURE	/////////////////////////////////

function addDataStructureMappingStruc(cpt)   // il s'agit de la structure des champs des fichier de mapping (differents fields)
{
	//cpt counts the number of mapping_struc structures in order to adress the right ids
	//nbr is the maximum number allowed of mapping_struc structures (number of infiles)
	// if all checkboxes are checked, no need to add a data structure + dont check twice a structure for one file
	var nbr=document.getElementById('mapping_file_number').value;

	if(!nbr)
	{alert('First indicate the number of mapping-files');}
	else if(cpt>nbr)
	{alert('Too many Mapping Data Structure');}
	else
	{
	var next=cpt+1;
	var prec=cpt-1;
			
		var text='<div class="checkbox" id="checkboxMappingStruc_div_'+cpt+'">\
                <label>\
                   <input type="checkbox" checked>File 1\
                </label>\
			</div>	\
			\
			</br>\
            <div class="bs-example table-responsive">\
              <table class="table table-striped table-bordered table-hover">\
                <tbody id="MappingList'+cpt+'">\
                  <tr id="tr1_MappingStruc'+cpt+'">\
                    <td><strong>Column #</strong></td>\
                    <td> \
						1\
					</td>\
                  </tr>\
				  <tr id="tr2_MappingStruc'+cpt+'">\
                    <td><strong>Name</strong></td>\
                    <td> \
						<div class="form-group">\
							<div class="col-lg-12">\
							  <input type="text" class="form-control" id="tr1_Name_Mapping'+cpt+'" placeholder="ex : From">\
							</div>\
						</div>\
					</td>\
                  </tr>\
                </tbody>\
              </table>\
            </div>\
			      \
                  <div class="form-group">\
				    <div class="col-lg-10 col-lg-offset-2">\
					<input type="button" id="removeBTN'+cpt+'" value="Remove field" class="btn btn-default" onclick="removeFieldMappingStruc(\'tr1_MappingStruc'+cpt+'\','+cpt+')">\
					<input type="button" id="addBTN'+cpt+'" value="Add field" class="btn btn-primary" onclick="addFieldMappingStruc(\'tr1_MappingStruc'+cpt+'\','+cpt+')">\
						</br></br>\
					  <input type="button" id="newMappingStrucStructureBTN'+cpt+'" value="Add structure" class="btn btn-primary" onclick="addDataStructureMappingStruc('+next+');">\
					  <input type="button" id="removeMappingStrucStructureBTN'+cpt+'" value="Remove structure" class="btn btn-default" onclick="removeDataStructureMappingStruc('+cpt+');">\
                    </div>\
				 </div>';
	
	
	//hide precendent addstructure button
	document.getElementById('newMappingStrucStructureBTN'+prec).style.display='none';
	document.getElementById('removeMappingStrucStructureBTN'+prec).style.display='none';
	document.getElementById('mapping_struc_div_'+cpt).innerHTML=text;
	checkBoxesMappingStruc(cpt);
	
	localStorage.setItem("cpt_mapping_fields"+cpt, 1);  //la nouvelle structure a au moins un champs
	
	}
}


		
function removeDataStructureMappingStruc(cpt)
{
	if(cpt==1)
	{alert("Set a least one mapping data structure");}
	else
	{
		var prec=cpt-1;
		document.getElementById('newMappingStrucStructureBTN'+prec).style.display='block';
		document.getElementById('removeMappingStrucStructureBTN'+prec).style.display='block';
		document.getElementById('mapping_struc_div_'+cpt).innerHTML='';
		localStorage.setItem("cpt_mapping_fields"+cpt, 0); //on vient de deleter la structure
		localStorage.setItem("cpt_mapping_struc",prec);
	}
}	


function addFieldMappingStruc(idList,cpt_mapping_struc)
	{
		
		var list=document.getElementById(idList);
		var nbr_in=document.getElementById('in_file_number').value;
		//var nbr_in=3; 
		//alert(leng); 
		var nbr=list.childNodes.length; 
		//alert(nbr); 7e node au premier click 8e au 2e   7   8   9
		var cpt=(nbr-3);
		//alert(cpt);  //2   3    4
		//var node=document.createElement("tr");
		//node.setAttribute("id", "tr"+cpt+"_Raw"+cpt_raw);
		//var textnode=document.createTextNode("empty");

		//node.appendChild(textnode);
		//document.getElementById(idList).appendChild(node);
		
					
		for(var i=1;i<=2;i++)
		{
			idList='tr'+i+'_MappingStruc'+cpt_mapping_struc;
			var node=document.createElement("td");
			
			if(i==1) // #
			{
			var text=cpt;
			node.setAttribute("id", "td"+cpt+"_MappingStrucNbr"+cpt_mapping_struc);
			var textnode=document.createTextNode("empty");
		
			node.appendChild(textnode);
			document.getElementById(idList).appendChild(node);
			document.getElementById("td"+cpt+"_MappingStrucNbr"+cpt_mapping_struc).innerHTML=text;
			}
			else if(i==2)
			{
			node.setAttribute("id", "td"+cpt+"_MappingStrucName"+cpt_mapping_struc);
			var text = '<div class="form-group">\
								<div class="col-lg-12">\
									<input type="text" class="form-control" id="tr'+cpt+'_Name_Mapping'+cpt_mapping_struc+'" placeholder="ex : From">\
								</div>\
							</div>';
			var textnode=document.createTextNode("empty");
		
			node.appendChild(textnode);
			document.getElementById(idList).appendChild(node);
			document.getElementById("td"+cpt+"_MappingStrucName"+cpt_mapping_struc).innerHTML=text;
			}
		}			
		
		localStorage.setItem("cpt_mapping_fields"+cpt_mapping_struc, cpt);
		//alert(cpt);
		
		
		
}
		
function removeFieldMappingStruc(idList,cpt_mapping_struc)
{

	
	var list=document.getElementById(idList);   // list = tr Nbr
		//alert(leng);
		var nbr=list.childNodes.length;
		var cpt=(nbr-4);
		//alert(nbr);  5 4 3
		//alert(cpt);
		
		if (cpt!=1)
		{

			document.getElementById('td'+cpt+'_MappingStrucNbr'+cpt_mapping_struc).innerHTML = '';
			document.getElementById('td'+cpt+'_MappingStrucName'+cpt_mapping_struc).innerHTML = '';
			list.removeChild(list.childNodes[nbr-1]);
			list=document.getElementById('tr2_MappingStruc'+cpt_mapping_struc);  // list = tr Name
			list.removeChild(list.childNodes[nbr-1]);
		}
		else
		{
			alert("Set at least one field");
		}
		
		
}
	
	
/////////////////////////////// MAPPING PROCESSES ////////////////////////////////////////

function SetMappingDiv(idCurrent_bigDiv,idNext_bigDiv)
{
	var nbr_of_mapping_files=document.getElementById("mapping_file_number").value;
	
	if(nbr_of_mapping_files==0)
	{
		nbr=0;
	}
	else
	{
		var file_nbr=localStorage.getItem("mapping_file_settings");
		var text="";
		var options="";
		//var mapping_file_nbr=localStorage.getItem("choice_mapping"); // fichier de mapping choisi par l'utilisateur
		//mapping_file_nbr=parseInt(mapping_file_nbr);
		//var array=localStorage.getItem("array_mapping");  // vecteur associant une structure a chaque fichier choisi par l'utilisateur
		//var k=(mapping_file_nbr)+(mapping_file_nbr-2); // lorsque le vecteur est stocké en localStorage, il compte aussi chaque virgule
		//var nbr=array[k];   // structure associée au fichier choisi
		var nbr=localStorage.getItem("chosen_struct_mapping");
	}
	
	
	if(idCurrent_bigDiv=="replacing_div")
	{
		options=getMappingStructureElementsAsOptions(nbr)
		text='<div class="form-group">\
								<label for="mapping_replace_kept" class="col-lg-2 control-label">Kept</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="mapping_replace_kept">';
		text+=options;
		text+='</select>\
									</div>\
								</div>\
						<div class="form-group">\
								<label for="mapping_replace_lost" class="col-lg-2 control-label">Lost</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="mapping_replace_lost">';
		text+=options;
		text+='</select>\
									</div>\
								</div>\
				<div class="form-group">\
					<label class="col-lg-2 control-label">Target</label>\
						<div class="col-lg-10">';
		text+='<span class="help-block">Select all identifiers or specify if there is only one specific position in the clean data structure that needs to be mapped.<span>\
			<div class="checkbox" id="checkboxReplacing">\
                <label>';
		//target
		options=getOutStructureElementsAsCheckboxesReplace();
		text+=options;
		text+='</label>\
				</div>\
			</div>\
		</div>';

			//drop ghost
		text+=        '<div class="form-group">\
						<label class="col-lg-2 control-label">Drop ghost</label>\
						<div class="col-lg-10">\
						  <div class="radio">\
							<label>\
							  <input type="radio" name="mapping_file_replace_radio" id="mapping_file_drop_ghost_on" value="on" checked="false">\
							  On\
							</label>\
						  </div>\
						  <div class="radio">\
							<label>\
							  <input type="radio" name="mapping_file_replace_radio" id="mapping_file_drop_ghost_off" value="off" checked="true">\
							  Off\
							</label>\
						  </div>\
						  <span class="help-block">Choose on if you want to drop ghost.\
						  This control allows specifying that if a variable in the mapping file has an empty field in the kept \
							position, all entries containing that field should be dropped. The scope of this removal is \
							implicitly related to the target positions defined by the value of the entry.</span>\
						</div>';
		text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
						  <input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'mapping_file_replace_info\',\'mapping_file_replace_pre\')">\
						  <input type="button" id="continueBTN2" value="Continue" class="btn btn-primary" onclick="CheckKeptLost()">\
						</div>\
                    </div>';
			
		document.getElementById('mapping_file_replace_info').innerHTML=text;
		
	}
	else if(idCurrent_bigDiv=="dropping_div")
	{
		text='<div class="form-group">\
					<label class="col-lg-2 control-label">Drop</label>\
						<div class="col-lg-10">';
		options=getOutStructureElementsAsCheckboxesDrop()
		text+='<span class="help-block">Select identifiers such that any entry that does not contain values regarding these identifiers will be dropped.<span>\
			<div class="checkbox" id="checkboxDropping">\
                <label>';
		text+=options;
		text+='</label></br>\
			</div>';
		text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
						  <input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'mapping_file_drop_info\',\'mapping_file_drop_pre\')">\
						  <input type="button" id="continueBTN2" value="Continue" class="btn btn-primary" onclick="CheckDrop()">\
						</div>\
                    </div>\
				</div>\
            </div>';
			
		document.getElementById('mapping_file_drop_info').innerHTML=text;
	
	}
	else if(idCurrent_bigDiv=="removing_div")
	{
		text='<div class="form-group">\
					<label class="col-lg-2 control-label">Remove duplicates</label>\
						<div class="col-lg-10">';
		options=getOutStructureElementsAsCheckboxesRemove()
		text+='<span class="help-block">This process allows you to make sure no double counting is present in the data. \
		Example of use: this is typically what will be used to remove duplicates present when sub entities are lending to the same counterparty as a reporting \
		artifact from their holding institution.<span>\
			<div class="checkbox" id="checkboxRemoving">\
                <label>';
		text+=options;
		text+='</label></br>\
			</div>';
		text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
						  <input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'mapping_file_dupl_info\',\'mapping_file_dupl_pre\')">\
						  <input type="button" id="continueBTN2" value="Continue" class="btn btn-primary" onclick="CheckRemove()">\
						</div>\
                    </div>\
				</div>\
            </div>';
			
		document.getElementById('mapping_file_dupl_info').innerHTML=text;
	
	}
	else if(idCurrent_bigDiv=="merging_div")
	{
		text='<div class="form-group">\
					<label class="col-lg-2 control-label">Merge</label>\
						<div class="col-lg-10">';
		options=getOutStructureElementsAsCheckboxesMerge()
		text+='<span class="help-block">This process allows you to merge entries.\
		Define targets specifying the set containing the fields in the data that will be compared to determine whether two entries must be merged and\
		the set of commands to apply to the rest of fields in the entry. <span>\
			<div class="checkbox" id="checkboxMerging">\
                <label>';
		text+=options;
		text+='</label></br>\
			</div>';
		text+='<div class="form-group">\
						<div class="col-lg-10 col-lg-offset-2">\
						  <input type="button" id="continueBTN2" value="Back" class="btn btn-info" onclick="ShowHideDiv(\'mapping_file_merge_info\',\'mapping_file_merge_pre\')">\
						  <input type="button" id="continueBTN2" value="Continue" class="btn btn-primary" onclick="CheckMerge();Summary">\
						</div>\
                    </div>\
				</div>\
            </div>';
			
		document.getElementById('mapping_file_merge_info').innerHTML=text;
	
	}
	else
	{
			alert("error");
	}
}


function getMappingStructureElementsAsOptions(mapping_structure_nbr)
{
	var text="";
	var fields_nbr=localStorage.getItem("cpt_mapping_fields"+mapping_structure_nbr);
	for(var i=1;i<=fields_nbr;i++)
	{
		text+="<option>";
		text+=i+" : ";
		text+=document.getElementById('tr'+i+'_Name_Mapping'+mapping_structure_nbr).value;
		text+="</option>";
	}
	
	return text;
	
}

function getOutStructureElementsAsCheckboxesReplace()
{
	var text="";
	var out_structure_nbr=localStorage.getItem("chosen_struct_out");
	var fields_nbr=localStorage.getItem("cpt_out_fields"+out_structure_nbr);
	//alert(out_structure_nbr)
	var cpt=0;
	for(var i=1;i<=fields_nbr;i++)
	{
		var checked=document.getElementById("tr"+i+"_checkBoxCleanKept_"+out_structure_nbr).checked;
		if(checked==true)
		{
			cpt+=1;
			var name=document.getElementById('tr'+i+'_Name_Clean'+out_structure_nbr).value;
			text+='<input type="checkbox" id="checkBoxReplaceField_'+i+'" value="'+name+'">';
			text+=name
			text+="</br>";
		}
	}

	localStorage.setItem("nbr_fields_replace", cpt);
	
	return text;
	
}

function getOutStructureElementsAsCheckboxesDrop()
{
	var text="";
	var out_structure_nbr=localStorage.getItem("chosen_struct_out");
	var fields_nbr=localStorage.getItem("cpt_out_fields"+out_structure_nbr);
	//alert(out_structure_nbr)
	var cpt=0;
	for(var i=1;i<=fields_nbr;i++)
	{
		var checked=document.getElementById("tr"+i+"_checkBoxCleanKept_"+out_structure_nbr).checked;
		if(checked==true)
		{
			cpt+=1;
			var name=document.getElementById('tr'+i+'_Name_Clean'+out_structure_nbr).value;
			text+='<input type="checkbox" id="checkBoxDropField_'+i+'" value="'+name+'">';
			text+=name;
			text+="</br>";
		}
	}

	localStorage.setItem("nbr_fields_drop", cpt);
	
	return text;
	
}

function getOutStructureElementsAsCheckboxesRemove()
{
	var text="";
	var out_structure_nbr=localStorage.getItem("chosen_struct_out");
	var fields_nbr=localStorage.getItem("cpt_out_fields"+out_structure_nbr);
	var cpt=0;
	for(var i=1;i<=fields_nbr;i++)
	{
		var checked=document.getElementById("tr"+i+"_checkBoxCleanKept_"+out_structure_nbr).checked;
		if(checked==true)
		{
			cpt+=1;
			var name=document.getElementById('tr'+i+'_Name_Clean'+out_structure_nbr).value;
			text+='<input type="checkbox" id="checkBoxRemoveField_'+i+'" value="'+name+'">';
			text+=name;
			text+="</br>";
		}
	}

	localStorage.setItem("nbr_fields_remove", cpt);
	
	return text;
	
}

function getOutStructureElementsAsCheckboxesMerge()
{
	var text="";
	var out_structure_nbr=localStorage.getItem("chosen_struct_out");
	var fields_nbr=localStorage.getItem("cpt_out_fields"+out_structure_nbr);
	var cpt=0;
	text+='<div class="col-lg-7">\
				<span>1 - Define the field(s) that will be compared to determine whether two entries must be merged</span>\
			</div>';
	for(var i=1;i<=fields_nbr;i++)
	{
		var checked=document.getElementById("tr"+i+"_checkBoxCleanKept_"+out_structure_nbr).checked;
		if(checked==true)
		{
			cpt+=1;
			var name=document.getElementById('tr'+i+'_Name_Clean'+out_structure_nbr).value;
			text+='<div class="col-lg-7">\
						<input type="checkbox" id="checkBoxMergeFieldTarget_'+i+'" value="'+name+'">';
			text+=name;
			text+='</div>';
			text+="</br></br>"; 
		}
	}
	text+='</br><div class="col-lg-7">\
				<span>2 - Select the rest of field(s) where the action of the merging process should be applied</span>\
			</div></br>';
	for(var i=1;i<=fields_nbr;i++)
	{
		var checked=document.getElementById("tr"+i+"_checkBoxCleanKept_"+out_structure_nbr).checked;
		if(checked==true)
		{
			var name=document.getElementById('tr'+i+'_Name_Clean'+out_structure_nbr).value;
			text+='<div class="col-lg-7">\
						<input type="checkbox" id="checkBoxMergeField_'+i+'" value="'+name+'">';
			text+=name;
			text+='</div>';
			
			text+='<div class="col-lg-3">\
					<select class="form-control" id="selectMergeField_'+i+'">\
							<option>avg</option>\
							<option>+</option>\
							<option>same</option>\
						  </select>\
						</div>';
			text+="</br>";
		}
	}

	localStorage.setItem("nbr_fields_merge", cpt);
	
	return text;
	
}

function arrayInfoMapping() //fonction utilisée lors du storage des infos de chaque process
{
		var cpt_mapping=localStorage.getItem("cpt_mapping");  //nombre de structures de fichiers de mappings (directory, delimiter,..)
		var nbr=document.getElementById('mapping_file_number').value; //nombre de fichier de mapping
		var array=[];
		
		// check the structure for every mapping-file
		for(var i=1;i<=nbr;i++)
		{
			var oneStructBool=false;
			for(var j=1;j<=cpt_mapping;j++)
			{

				var t=document.getElementById("checkBoxMapping_"+i+j).checked;
				if(t==true && oneStructBool==false)
				{
					oneStructBool=true;
					array[i-1]=j;
					//alert(code);
				}
				else if(t==true && oneStructBool==true)
				{alert("You can only check 1 mapping structure per mapping-file. Verify checkboxes");}
				
				
			}
			
			if(oneStructBool==false)
			{
				alert("You have to check 1 mapping structure per mapping-file. Verify checkboxes");
			}		
		}
	
	return array;
		

}

function Summary()
{
	var nbr=localStorage.getItem('nbr_processes');
	document.getElementById("nbr_summary").innerHTML=nbr;
	

}


/////////////////////////// NETWORK /////////////////////////

function getOutStructureElementsAsOptions(out_structure_nbr)
{
	var text="";
	var fields_nbr=localStorage.getItem("cpt_out_fields"+out_structure_nbr);
	for(var i=1;i<=fields_nbr;i++)
	{
		var checked=document.getElementById("tr"+i+"_checkBoxCleanKept_"+out_structure_nbr).checked;
		if(checked==true)
		{
			text+="<option>";
			text+=document.getElementById('tr'+i+'_Name_Clean'+out_structure_nbr).value;
			text+="</option>";
		}
	}
	
	return text;
	
}

function SetNetworkDiv()
{
	var nbr=localStorage.getItem('cpt_clean');  // number of clean structures
	
	for(var i=1;i<=nbr;i++)
	{
		var text="";
		text+='<p class="text-info">Clean-Structure '+i+'</p>';
		options=getOutStructureElementsAsOptions(i)
		// OUT NODE
		text+='<div class="form-group">\
								<label for="network_out_node'+i+'" class="col-lg-2 control-label">Out Node</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="network_out_node'+i+'">';
		text+=options;
		// IN NODE
		text+='</select>\
									</div>\
								</div>\
								<br><br>\
						<div class="form-group">\
								<label for="network_in_node'+i+'" class="col-lg-2 control-label">In Node</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="network_in_node'+i+'">';

		text+=options;
		text+='</select>\
									</div>\
								</div>';
								
			//directed
		text+=        '<div class="form-group">\
						<label class="col-lg-2 control-label">Network is directed ?</label>\
						<div class="col-lg-10">\
						  <div class="radio">\
							<label>\
							  <input type="radio" name="network_is_directed'+i+'" id="network_is_directed_on'+i+'" value="on" checked="false">\
							  On\
							</label>\
						  </div>\
						  <div class="radio">\
							<label>\
							  <input type="radio" name="network_is_directed'+i+'" id="network_is_directed_off'+i+'" value="off" checked="true">\
							  Off\
							</label>\
						  </div>\
						  <span class="help-block"></span>\
						</div>\
					</div>';
					
		//weighted
		text+=        '<div class="form-group">\
						<label class="col-lg-2 control-label">Network is weighted ?</label>\
						<div class="col-lg-10">\
						  <div class="radio">\
							<label>\
							  <input type="radio" name="network_is_weighted'+i+'" id="network_is_weighted_on'+i+'" value="on" checked="false">\
							  On\
							</label>\
						  </div>\
						  <div class="radio">\
							<label>\
							  <input type="radio" name="network_is_weighted'+i+'" id="network_is_weighted_off'+i+'" value="off" checked="true">\
							  Off\
							</label>\
						  </div>\
						  <span class="help-block"></span>\
						</div>\
					</div>';
		//WEIGHT NODE
		text+='				<div class="form-group">\
								<label for="network_edge_weight'+i+'" class="col-lg-2 control-label">Edge Weight</label>\
									<div class="col-lg-10">\
										<select class="form-control" id="network_edge_weight'+i+'">';
		text+="<option> </option>";
		text+=options;
		text+='</select>\
									</div>\
								</div><br><br><br><br>';
								
		document.getElementById("network_div"+i).innerHTML=text;
	
	}

}


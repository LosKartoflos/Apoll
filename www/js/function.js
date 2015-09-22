
           // document.addEventListener("deviceready", onDeviceReady, false);

            /*function onDeviceReady() {
                $('a').on('click', function () {
                    dateElementClicked(this);
                });
            }*/

            $("a").bind("click", function (event, ui){
                dateElementClicked(this);
            });
            
            $("button").bind("click", function (event, ui){
                dateElementClicked(this);
            });

            /*$(document).on('click', 'a', function (event) {
                dateElementClicked(this);
            });*/
            /*$(function () {
             
             
             // Assign the click handler on DOM-ready
             $('a').on('click', function () {
             dateElementClicked(this);
             });
             });
             
             $(document).ready($(function () {
             
             
             // Assign the click handler on DOM-ready
             $('a').on('click', function () {
             dateElementClicked(this);
             });
             })
             );
             
             $("#anchor0").live("click", dateElementClicked($("#anchor0")));
             
             $("a").click( dateElementClicked(this));*/
             var numberOfAppointments = 0;

            var appointmentList = new Array();

            //$(document).ready(newDateElement());   
            /*Controls what happens if a dateElement is clicked:
             * 
             * if its the first time it will change to a normal dateElement
             * else it will be pop out an will be editable or shrink
             */
            function dateElementClicked(clickedAnchor) {

                //anchor is clicked the first time(the id number equals numberOfAppointments)
                if (clickedAnchor.id.slice(-1) == numberOfAppointments) {
                    dateElementClickedFirstTime(clickedAnchor);
                }
                else if (appointmentList[getDateElementNumber(clickedAnchor)]["RolledOut"] == true)
                {
                    hideContent(getDateElementNumber(clickedAnchor));
                }
                else if (appointmentList[getDateElementNumber(clickedAnchor)]["RolledOut"] == false)
                {
                    showContent(getDateElementNumber(clickedAnchor));
                }
                else
                {
                    alert("Element not listed");
                }
            }

            //gets the Number of the Dateelement of a clicked Anchor
            function getDateElementNumber(clickedAnchor) {
                return(clickedAnchor.id.slice(-1));
            }

            //Show and Hide

            //Hides in inputs and p of certain date Element
            function hideContent(elementNumber) {
                document.getElementById("content" + elementNumber).style.visibility = "hidden";
                document.getElementById("content" + elementNumber).style.height = "0px";
                appointmentList[elementNumber]["RolledOut"] = false;
            }
            //Shows in inputs and p of certain date Element
            function showContent(elementNumber) {
                document.getElementById("content" + elementNumber).style.visibility = "visible";
                document.getElementById("content" + elementNumber).style.height = "auto";
                appointmentList[elementNumber]["RolledOut"] = true;
            }

            // if a is clicked the first Time
            function dateElementClickedFirstTime(clickedAnchor) {
                //adding the html stuff

                //the container div which should get html stuff
                var divContainer = clickedAnchor.parentElement;

                divContainer.style = "background-color:#009688; border-radius:16px; margin: 0px 2 px 0px 5px";
                divContainer.innerHTML = divContainer.innerHTML +
                        "<div id='content" + numberOfAppointments + "' style='padding: 3px 3px 3px 3px'><p id='labelDate' style='visibility:inherit'>Datum: <input class='.ui-input-text' id='day' value='' style='visibility:inherit'/><input id='month' value='MM' style='visibility:inherit'/><input id='year' value='YYYY' style='visibility:inherit'/></p><p id='labelTime' style='visibility:inherit'>Uhrzeit: <input id='hour' value='hour' style='visibility:inherit'/><input id='min' value='min' style='visibility:inherit'/></p></div>"



                //adding to apoinment list
                appointmentList[numberOfAppointments] = new Object();
                appointmentList[numberOfAppointments]["Id"] = numberOfAppointments;
                appointmentList[numberOfAppointments]["Date"] = new Date();
                appointmentList[numberOfAppointments]["RolledOut"] = true;

                //decide which Time and Date will be preconfigured
                var dateTime = appointmentList[numberOfAppointments]["Date"];
                /*
                 if (numberOfAppointments == 0) {
                 setCurrentTime(numberOfAppointments, dateTime);
                 }
                 
                 else if (numberOfAppointments == 0) {
                 dateTime.setHours(dateTime.getHours() + numberOfAppointments);
                 setCurrentTime(numberOfAppointments, dateTime);
                 }
                 */


                //countig up the ID counter (must come at last)
                numberOfAppointments += 1;
                newDateElement();
            }


            /*adds a new Date Element to the Container div*/
            function newDateElement() {
                var unrolledDiv = document.createElement("div");
                unrolledDiv.id = "container" + numberOfAppointments;
                unrolledDiv.innerHTML = "<a data-role='button' onclick='dateElementClicked(this)' class='ui-link ui-btn ui-shadow ui-corner-all' role='button' id='anchor" + numberOfAppointments + "'>Neuen Termin Hinzufügen</a>";
                document.getElementsByClassName("ui-content")[0].appendChild(unrolledDiv);
            }
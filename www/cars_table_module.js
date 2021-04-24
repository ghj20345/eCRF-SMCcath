function cars_table_module_js(ns_prefix) {

  $("#" + ns_prefix + "car_table").on("click", ".delete_btn", function() {
    Shiny.setInputValue(ns_prefix + "car_id_to_delete", this.id, { priority: "event"});
    $(this).tooltip('hide');
  });
  
  // demographic edit button
  $("#" + ns_prefix + "car_table").on("click", ".edits_btn", function() {
    Shiny.setInputValue(ns_prefix + "car_id_to_edit", this.id, { priority: "event"});
    $(this).tooltip('hide');
  });
  
  // event edit button
   $("#" + ns_prefix + "car_table").on("click", ".edit_btn", function() {
    Shiny.setInputValue(ns_prefix + "car_id_to_edit_event", this.id, { priority: "event"});
    $(this).tooltip('hide');
  });
  
  // lab edit button
  $("#" + ns_prefix + "car_table").on("click", ".editl_btn", function() {
    Shiny.setInputValue(ns_prefix + "car_id_to_edit_lab", this.id, { priority: "event"});
    $(this).tooltip('hide');
  });
  
  // m1 edit button
  $("#" + ns_prefix + "car_table").on("click", ".editm1_btn", function() {
    Shiny.setInputValue(ns_prefix + "car_id_to_edit_m1", this.id, { priority: "event"});
    $(this).tooltip('hide');
  });
  
  // m3 edit button
  $("#" + ns_prefix + "car_table").on("click", ".editm3_btn", function() {
    Shiny.setInputValue(ns_prefix + "car_id_to_edit_m3", this.id, { priority: "event"});
    $(this).tooltip('hide');
  });
  
  // m6 edit button
  $("#" + ns_prefix + "car_table").on("click", ".editm6_btn", function() {
    Shiny.setInputValue(ns_prefix + "car_id_to_edit_m6", this.id, { priority: "event"});
    $(this).tooltip('hide');
  });
  
  // mf edit button
  $("#" + ns_prefix + "car_table").on("click", ".editmf_btn", function() {
    Shiny.setInputValue(ns_prefix + "car_id_to_edit_mf", this.id, { priority: "event"});
    $(this).tooltip('hide');
  });
}



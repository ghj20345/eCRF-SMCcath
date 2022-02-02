hospital_select_module_ui <- function(id) {
  ns <- NS(id)
  
  fluidRow(
    column(width = 2, 
           selectInput(ns("hospital"), 
                       NULL, 
                       c("삼성서울병원", "전남대병원"), width = "100%"), 
          )
  )
}

hospital_select_module <- function(input, output, session) {
  return (reactive({input$hospital}))
}
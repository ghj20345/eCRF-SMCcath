library(log4r)

log_file <- "data_entry.log"
file_logger <- logger("INFO", appenders = file_appender(log_file))

log_data <- function(action, data) {
  keys <- names(data)
  header <- paste("[", action, "] ")
  body <- ""

  for(i in 1:length(data)) {
    if (nchar(data[i]) > 1 && is.na(data[i]) == FALSE) {
      body <- paste0(body, keys[i], ":", data[i])
      if (i != length(data)) {
        body <- paste0(body, ", ")
      }
    }
  }

  log <- paste0(header, body)
  log4r::info(file_logger, log)
}
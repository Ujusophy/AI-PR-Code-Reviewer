const files = Array.isArray($json) ? $json : [$json]; // Ensure array format

const formattedFiles = files.map(file => `- ${file.filename} (${file.status})`).join("\n");

return [{
  formattedFiles: formattedFiles
}];

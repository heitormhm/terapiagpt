$backupDir = "img_backup"
$targetDir = "img"

# Check if backup directory exists
if (Test-Path $backupDir) {
    # Move all files from backup to img directory
    Get-ChildItem -Path $backupDir | ForEach-Object {
        Move-Item -Path $_.FullName -Destination $targetDir -Force
    }
    
    # Remove the empty backup directory
    Remove-Item -Path $backupDir
    
    Write-Host "Images have been recovered successfully to the img directory."
} else {
    Write-Host "Backup directory not found. Unable to recover images."
}

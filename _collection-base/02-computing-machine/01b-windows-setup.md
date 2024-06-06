---
title: "Unix command line tools on Windows"
layout: single
author: Aleksandra Badaczewska
author_profile: true
header:
  overlay_color: "444444"
  overlay_image: 02-computing-machine/assets/images/03_computer_setup_banner.png
type: "tutorial"
order: 212
level: 2
categories: ["system-setup", "command-line"]
tags: ["local-machine", "operating-system", "windows", "unix", "WSL", "PowerShell", "bash"]
attributes: ["installation"]
---

{% include toc %}
{% include images_path %}
{% include page-sourcing.html %}


# Introduction

## PowerShell Commands

Getting started with the terminal and command line on Windows is straightforward, as PowerShell is built into Windows 11, providing a powerful scripting environment.


## Bash commands on Windows

Bash commands do not work in PowerShell or the traditional Command Prompt by default since bash is a Unix shell and command language. To use bash commands directly, you would need to enable Windows Subsystem for Linux (WSL) or use a third-party application like Git Bash.

---

### Using PowerShell

1. **Access PowerShell**
* Right-click the `Start button` or press `Win + X`, then select ***Windows Terminal*** or ***Windows PowerShell*** from the menu. Windows Terminal allows you to use PowerShell, Command Prompt, and other shells from the same window.
* Alternatively, you can search for ***PowerShell*** in the `Start menu`.

2. **Basic PowerShell Commands**

| command | description |
|---------|-------------|
|`Get-Command`                    | Lists all commands available in PowerShell. |
|`Get-Help <command>`             | Displays help information about PowerShell commands. |
|`Get-Location`                   | Shows your current directory. |
|`Set-Location <path>`            | Changes your current directory. |
|`Get-ChildItem`                  | Lists files and directories in the current directory. |
|`Copy-Item <path> <destination>` | Copies files or directories. |
|`Move-Item <path> <destination>` | Moves files or directories. |
|`Remove-Item <path>`             | Deletes files or directories. |

3. **Executing Scripts**
* PowerShell scripts have a `.ps1` extension.
* To run a script:
  * navigate to the script's directory,
  * type `./scriptName.ps1`
  * press `Enter`


### Enabling Windows Subsystem for Linux (WSL) for Bash Commands

1. **Enable WSL**
* Open PowerShell as Administrator.
* Run the command `wsl --install` to install the Windows Subsystem for Linux and a Linux distribution (Ubuntu by default).
* Follow the prompts and restart your computer if required.

2. **Access Linux Terminal**
* After installation, open the `Start menu`, search for the Linux distribution you installed (e.g., "Ubuntu"), and open it.
* Complete the initial setup by creating a user and setting a password.

3. **Using Bash Commands**
* Now, you can use bash commands within this Linux environment on Windows 11.


### Using Third-party Applications like Git Bash

Download and install `Git for Windows` from its official website. During installation, select options that allow you to use Git from the Windows Command Prompt if desired. Once installed, you can open `Git Bash` from the `Start menu` and use bash commands directly.

*This setup allows you to work with a variety of command-line tools and environments directly on Windows 11, whether you're more comfortable with PowerShell, prefer the Unix-style environment of bash, or need to use both.*


## TASK: Change files structure and rename files (Power Shell)

You can accomplish this task using PowerShell by leveraging its scripting capabilities to iterate through the directories, extract the required parts from the file path *(year, trial, sample name, and slice)* and then rename and move the files accordingly.

Below is a PowerShell script that demonstrates how you might approach this task.

This script assumes that you have a root directory where your structured folders start (e.g., `C:\Data\Year\Trial\Sample Name\Slice X\Name.bmp`), and you want to move all `.bmp` files to a single target directory, renaming them in the process to the format `Sample_Name_Slice_X.bmp.`

**1. Create a script file** `copy_files.ps1` **and copy-paste the code**

```bash
# Define the root directory where the structured folders start
$rootDirectory = "C:\Path\To\Your\RootDirectory"

# Define the target directory where you want to move and rename the files
$targetDirectory = "C:\Path\To\Your\TargetDirectory"

# Create the target directory if it does not already exist
if (-not (Test-Path -Path $targetDirectory)) {
    New-Item -Path $targetDirectory -ItemType Directory
}

# Recursively find all .bmp files in the root directory
$files = Get-ChildItem -Path $rootDirectory -Filter *.bmp -Recurse

foreach ($file in $files) {
    # Extract parts of the file path
    $pathParts = $file.DirectoryName -split '\\'
    # Assuming the structure is always Year/Trial/Sample Name/Slice X
    $sampleName = $pathParts[-2] -replace ' ', '_'
    $slice = $pathParts[-1] -replace ' ', '_'

    # Create the new file name based on your desired format
    $newFileName = "$($sampleName)_$($slice).bmp"

    # Define the full path for the new file location
    $newFilePath = Join-Path -Path $targetDirectory -ChildPath $newFileName

    # Move and rename the file
    Copy-Item -Path $file.FullName -Destination $newFilePath
}

Write-Output "All files have been moved and renamed successfully."
```

Make sure to replace:
* `C:\Path\To\Your\RootDirectory` with the path to your root directory and
* `C:\Path\To\Your\TargetDirectory` with the path to the directory where you want to move the files.

This script will not overwrite files in the target directory if a file with the same name already exists. If you're dealing with files that might have the same resulting name, consider adding additional logic to handle duplicates, such as appending a number to the file name.

**Always test scripts like this on a small set of data before running them on your entire dataset to ensure it works as expected and to avoid data loss.**


**2. Running PowerShell Scripts**

To run a PowerShell script on a Windows machine, you first need to ensure that your system is configured to allow the execution of PowerShell scripts. PowerShell's execution policy might restrict the running of scripts by default.

* **Open PowerShell** <br>
Right-click the `Start button`, then select "Windows Terminal" or "PowerShell" from the menu.

* **Check Execution Policy** <br>
Before running a script, check the current execution policy using the following command:
```bash
Get-ExecutionPolicy
```

*If it returns `Restricted`, you'll need to change the execution policy.*

* **Change Execution Policy** *(if needed)* <br>
To allow script execution, set the execution policy to, for example, `RemoteSigned` which allows running scripts created on the local machine:
```bash
Set-ExecutionPolicy RemoteSigned
```

**WARNING:** *This command requires Administrator privileges. Choose an execution policy level that meets your security needs.*

* **Run the Script** <br>
Navigate to the directory containing your script, then run it by specifying its path:
```
.\YourScriptName.ps1
```


## TASK: Change files structure and rename files (Bash commands via WSL)

You can perform the same task using Bash commands. The approach involves:
- finding all `.bmp` files within the nested directory structure,
- then extracting necessary parts of the file path to construct the new file name,
- and finally copying/moving and renaming the files to a single directory.

This script assumes you have a similar directory structure (`Year/Trial/Sample Name/Slice 1 or Slice 2/Name.bmp`) and you want to move all `.bmp` files to a single directory, renaming them to the format `Sample_Name_Slice_1.bmp` or similar.

**1. Create the script file** `copy-files.sh` **and copy-paste the code**

```bash
#!/bin/bash

# Define the root directory where your structured folders start
rootDirectory="/path/to/your/rootDirectory"

# Define the target directory where you want to move and rename the files
targetDirectory="/path/to/your/targetDirectory"

# Create the target directory if it does not exist
mkdir -p "$targetDirectory"

# Find all .bmp files in the root directory and its subdirectories
find "$rootDirectory" -type f -name "*.bmp" | while read file; do
    # Extract the parts of the file path
    pathParts=($(dirname "$file" | tr '/' '\n'))
    sampleName=$(echo "${pathParts[-2]}" | tr ' ' '_')
    slice=$(echo "${pathParts[-1]}" | tr ' ' '_')

    # Extract the file name
    fileName=$(basename "$file")

    # Construct the new file name
    newFileName="${sampleName}_${slice}.bmp"

    # Move and rename the file to the target directory
    cp "$file" "$targetDirectory/$newFileName"
done

echo "All files have been moved and renamed successfully."
```

In this script:
* `find "$rootDirectory" -type f -name "*.bmp"`: Finds all `.bmp` files starting from `$rootDirectory`.

* `dirname "$file" and basename "$file"`: Extract the directory path and file name, respectively.

* `tr '/' '\n'`: Translates slashes to newlines to split the path into parts.

* `tr ' ' '_'`: Replaces spaces with underscores in directory names to match your desired file naming convention.

* `mv "$file" "$targetDirectory/$newFileName"`: Moves and renames the file to the target directory.

Make sure to replace `/path/to/your/rootDirectory` with the actual path to your root directory and `/path/to/your/targetDirectory` with the path to your desired target directory. As with any script that moves and renames files, it's wise to test this on a small subset of your data before applying it to the entire dataset to ensure it behaves as expected.

**2. Running Bash Scripts**

On Unix-like systems (Linux, macOS) or Windows with Windows Subsystem for Linux (WSL) or Git Bash, running Bash scripts is straightforward:

* **Open Terminal or Bash** <br>
  * On Linux or macOS, open the Terminal application.
  * On Windows, open WSL or Git Bash.


* **Make the Script Executable** *(if not already)* <br>
Before running a Bash script, you might need to make it executable. Navigate to the directory containing your script and run:
```
chmod +x script_name.sh
```
<i>This step is only needed once for each script.</i>

* **Run the Script** <br>
Execute the script by specifying its path:
```bash
./YourScriptName.sh
```

**NOTES:**
* For **Windows users** running Bash scripts, if you're using `WSL`, you can access your C drive, for example, at `/mnt/c/` from within WSL.
* When **running scripts that affect your file system** or configuration, always make sure you understand what the script does to avoid unintended changes.
* Depending on your script's requirements, you may need to run the PowerShell or Terminal application with Administrator privileges or use sudo in Unix-like systems for commands that require superuser access.


## Python

Python can be a good choice for tasks involving file manipulation, such as copying files from a nested directory structure while renaming them, due to its readability and the powerful libraries available for file and path manipulations.

Python might not always be more efficient than shell commands in terms of execution speed, especially for simple tasks, but it can offer more straightforward and maintainable code for complex tasks.

Below is a Python script that accomplishes the task. <br>
This script does not require any external libraries beyond what is included with a standard Python installation, specifically using the `os` and `shutil` modules.

This script walks through the directory structure starting from your custom `root_directory`, finds all `.bmp` files, constructs a new file name based on the parent and grandparent directory names (replacing spaces with underscores), and copies them to your custom `target_directory` with the new names.

**1. Create the script file** `copy_files.py` **and copy-paste the code**

```python
import os
import shutil

def copy_and_rename_files(root_directory, target_directory):
    for root, dirs, files in os.walk(root_directory):
        for file in files:
            if file.endswith(".bmp"):
                # Construct the new file path
                parts = root.split(os.sep)
                sample_name = parts[-2].replace(' ', '_')
                slice_name = parts[-1].replace(' ', '_')
                new_file_name = f"{sample_name}_{slice_name}.bmp"

                source_path = os.path.join(root, file)
                target_path = os.path.join(target_directory, new_file_name)

                # Copy the file to the new location
                shutil.copy2(source_path, target_path)
                print(f"Copied: {source_path} to {target_path}")

# Example usage
root_directory = "/path/to/your/rootDirectory"
target_directory = "/path/to/your/targetDirectory"
copy_and_rename_files(root_directory, target_directory)
```

Remember to replace `/path/to/your/rootDirectory` and `/path/to/your/targetDirectory` with the actual paths for your directories.

**The Python approach offers flexibility and might be easier to maintain and modify**, especially for those more comfortable with Python than shell scripting.

**2. Installing Python is required** *(do it only once)*

If Python is not already installed on your system, follow these instructions to install it:

* **Windows**
  * Download the Python installer from the official Python website (https://python.org).
  * Run the installer. Ensure you check the box that says "Add Python X.X to PATH" at the start of the installation process.
  * Follow the installation prompts, choosing the install location or using the default one.


**3. Running the Python Script**

* Save the script to a file, for example, `copy_files.py` *(if not already)*.
* Open a terminal or command prompt.
* Navigate to the directory containing `copy_files.py`.
* Run the script with Python by executing:
```bash
python copy_files.py
```

**WARNING:** *On some systems, you may need to use python3 instead of python to use Python 3.*


## R

You can accomplish the task in R as well. <br>
R is not typically the first choice for file manipulation tasks, but it is quite capable of handling them through its built-in functions and the fs package for file system operations, which provides a more consistent interface across different operating systems.

The following `R script` iterates over a specified directory structure, finds all `.bmp` files, constructs new file names based on their directory path, and then copies them to a target directory.

```r
# Load necessary library
library(fs)

# Function to copy and rename files
copy_and_rename_files <- function(root_directory, target_directory) {
  # Create the target directory if it doesn't exist
  dir.create(target_directory, recursive = TRUE, showWarnings = FALSE)

  # Recursively list all .bmp files in the root directory
  file_paths <- fs::dir_ls(root_directory, glob = "*.bmp", recurse = TRUE)

  # Iterate over each file
  for (file_path in file_paths) {
    # Extract the parts of the file path
    path_parts <- unlist(strsplit(file_path, "/"))
    sample_name <- gsub(" ", "_", path_parts[length(path_parts)-2])
    slice_name <- gsub(" ", "_", path_parts[length(path_parts)-1])
    new_file_name <- paste(sample_name, slice_name, sep = "_")

    # Construct the target file path
    target_file_path <- file.path(target_directory, new_file_name)

    # Copy the file
    file.copy(file_path, target_file_path)
  }
}

# Example usage
root_directory <- "/path/to/your/rootDirectory"
target_directory <- "/path/to/your/targetDirectory"
copy_and_rename_files(root_directory, target_directory)
```

This script provides a straightforward way to accomplish your file copying and renaming task in R, suitable for those who prefer or require working within the R ecosystem.

**2. Installing R and RStudio**

If you don't have R and RStudio installed:

* **Install R**
  * Visit the Comprehensive R Archive Network (CRAN) at <a href="https://cran.r-project.org/" target="_blank">https://cran.r-project.org/</a> and download the R version for your operating system.
  * Follow the installation instructions.

* **Install RStudio**
  * Go to the RStudio download page at <a href="https://www.rstudio.com/products/rstudio/download/" target="_blank">https://www.rstudio.com/products/rstudio/download/</a> and download the appropriate version for your operating system.
  * Install RStudio following the provided instructions.

**3. Running the R Script**

* **In RStudio:**
  * Open RStudio.
  * Paste the script into a new script file.
  * Set root_directory and target_directory to your specific paths.
  * Press the `Run button` or use the keyboard shortcut (`Ctrl+Enter` on Windows/Linux, `Cmd+Enter` on macOS) to execute.

* **In Terminal:**
  * Save the script to a file, e.g., `copy_files.R`.
  * Open a terminal.
  * Navigate to the directory containing `copy_files.R`.
  * Run the script with R by executing:
```r
Rscript copy_files.R
```

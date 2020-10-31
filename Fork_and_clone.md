# ForkAndClone

How do I fork and clone a repository?
=====================================

1. Visit the repository on Github Enterprise or Github. Fork the repository:
    
    <img width="650" alt="ga-wdi-boston_meta" src="https://cloud.githubusercontent.com/assets/388761/10289480/724c1d56-6b6c-11e5-9c34-cf0138658d0c.png">

1. Within your fork of the repository, click on Clone or Download make sure you are using the HTTPS url when you clone your fork:

    ![forkandclone](https://media.git.generalassemb.ly/user/5694/files/48b96d80-d09f-11e9-93a4-e7a8ca755f5d)

    - Double-check that you are using **your fork** and not _The Original You Forked From_:

    <img width="650" alt="jrhorn424_meta" src="https://cloud.githubusercontent.com/assets/388761/10289547/e02c1dc6-6b6c-11e5-9c26-a33f09a891f8.png">
1. Locate your code folder on your computer after typing `pwd` you should see some output similar to 
  ```bash
   /Users/arthurbernier/code
  ```
1. From the command line, clone your repository using the link copied from github enterprise (makes sure you are in your SEIR folder):
    ```
    git clone <your_fork_https_url>
    ```
### Check Your Work

1. Check that the new directory is there by listing your current directory contents:
   ```
   ls <directory_name>
   ``` 

1. Change into the new directory to begin working in that directory:
   ```
   cd <directory_name>
   ```

### Troubleshooting 
 - Are you using your fork? 
 - Please ask an instructor or classmate for help if you are unable to troubleshoot.

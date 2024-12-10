# HOSTING A STATIC WEBSITE ON AWS S3

## PROJECT OVERVIEW
This project involved hosting a static website (index.html, styles.css, and script.js) on AWS S3 to make it publicly accessible. The website includes a user data collection form and a dynamic welcome message powered by JavaScript.

## STEPS TO HOSTING THE WEBSITE
1. ### Prepare the Website Files:
** Created index.html, styles.css, and script.js files.
** Verified the functionality locally by opening index.html in a browser.
   
2. ### Set Up an AWS S3 Bucket:
** Logged into the AWS Management Console.
** Created a new S3 bucket with a unique name (datacolbucket).
** Selected the "Block Public Access settings" option and unchecked "Block all public access" to allow public hosting.
   
3. ### Upload Website Files:
** Navigated to the Objects tab in the S3 bucket.
** Uploaded the index.html, styles.css, and script.js files.
   
4. ### Enable Static Website Hosting:
** Went to the Properties tab of the bucket.
** Enabled Static Website Hosting.
** Set the index document to index.html.
   
5. ### Update Bucket Policy for Public Access:
** Configured a bucket policy to allow public read access.
   
6. ### Test the Website:
** Accessed the website using the Endpoint URL provided in the Static Website Hosting configuration [(https://datacolbucket.s3.us-east-1.amazonaws.com/index.html)](https://datacolbucket.s3.us-east-1.amazonaws.com/index.html)

# CHALLENGES AND HOW I OVERCAME THEM  

## 1. Challenge: Public Access Restrictions
AWS S3 blocks public access by default, which prevented the website from being accessible initially.
Solution: Updated the bucket policy and ensured the Block Public Access settings were correctly configured.

## 2. Challenge: Incorrect File Paths
The JavaScript and CSS files were not loading due to incorrect relative paths in the index.html.
Solution: Verified and corrected the file paths (e.g., ensuring script.js and styles.css were in the same directory as index.html).

## 3. Challenge: Caching Issues
Updated versions of the files weren't reflecting immediately after making changes.
Solution: Cleared the browser cache and enabled versioning on the S3 bucket to track and update changes effectively.

# OBSERVATIONS
1. AWS S3 is simple yet powerful for hosting static websites, but its default security settings require careful attention.
2. The public endpoint URL provided by AWS S3 is not HTTPS by default for static websites (unless using CloudFront).
3. Real-time testing is easy once the website is hosted, as changes can be quickly uploaded to the S3 bucket.

# LESSONS LEARNT
1. Understand AWS Policies: Configuring bucket policies is crucial for public access, and small mistakes can lead to accessibility issues.
2. Versioning: Enabling versioning in the S3 bucket is helpful for tracking changes and reverting to previous versions if needed.
3. Testing Locally First: Always verify your website works locally to reduce debugging time during deployment.
4. HTTPS for Better Security: For production websites, integrating CloudFront with an SSL certificate is essential to ensure secure access.

# FUTURE IMPROVEMENTS
1. Add HTTPS Support: Use AWS CloudFront to enable HTTPS for better security.
2. Automate Deployment: Set up CI/CD pipelines using AWS CodePipeline or GitHub Actions for faster updates.
3. Optimize Performance: Use CloudFront for caching and faster delivery of website content globally.


















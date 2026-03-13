# Automated Deployment of a Web-based Game using CI/CD Pipeline on AWS S3

* This project demonstrates the development and automated deployment of a web-based game using React JS and a CI/CD pipeline with GitHub Actions, deployed to AWS S3.
* The goal of this project is to eliminate manual deployment and implement continuous integration and continuous deployment (CI/CD) practices commonly used in real-world DevOps workflows.

**Project Objectives:-**
1. Develop a simple interactive web-based game using React JavaScript, HTML, and CSS.
2. Implement version control using GitHub.
3. Build a CI/CD pipeline using GitHub Actions.
4. Automatically build and deploy the application to AWS S3 whenever new changes are pushed to the repository.
5. Eliminate manual deployment steps and ensure consistent and reliable application delivery.

Services Integrated in the Project
-------------------------------------------------------------------------------------------+
| Service	         |  Purpose                                                             |
-------------------------------------------------------------------------------------------+
| GitHub	         |   Used for source code version control and repository management    |
| AWS S3	         |   Hosts the static web application (React / HTML / CSS)             | 
| AWS IAM User	     |   Provides secure programmatic access credentials for deployment    |
| GitHub Actions	 |   Automates CI/CD pipeline (build, test, deploy)                    |
-------------------------------------------------------------------------------------------+

**Project Workflow**
The project follows an automated deployment workflow:-
***Developer → Push Code → GitHub Repository → GitHub Actions CI/CD Pipeline → AWS IAM User →  AWS S3 Bucket Deployment → Live Web Game***

**Project Architecture**

+------------+
| Developer  |
+------------+
       |   (Push Code)
       v
+-------------+
|   GitHub    |
| Repository  |
+-------------+
       |
       v
+----------------+
| GitHub Actions |
| CI/CD Pipeline |
+----------------+
       |
       v
+----------------+
|  AWS IAM User  |
| (Access Keys)  |
+----------------+
       |
       v
+-------------+
|   AWS S3    |
| Static Host |
+-------------+
       |
       v
+--------------------+
|  Live Web Game     |
+--------------------+

**Conclusion**
1. Successfully developed and deployed a web-based game without manual deployment.
2. Implemented a fully automated CI/CD pipeline using GitHub Actions.
3. Enabled automatic updates to AWS S3 whenever new code is pushed.
4. Gained hands-on experience with GitHub, GitHub Actions, AWS S3, and IAM.
5. Demonstrated how DevOps automation improves efficiency and reduces human errors.



# File_Sharing

```yaml
File_Sharing is fully Responsive MERN App with uploading image,share and download the files.
```

To Start Backend Server
- Go inside Server folder .
```yaml
    Step1: Clone repo to your local
    Step2: npm i 
    Step3: create a .env file and add "MONGO_URL" , "PORT"
    Step4: npm start
    
```
To Start Frontend Server
- Go inside client folder .
```yaml
    Step1: npm i 
    Step2: npm start
```
## Backend Includes
- File Model
- Image controller
- middleware
- posts and get routes
- index file

### Models
- File Model
```yaml
    {
    path: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    downloadContent: {
        type: Number,
        required: true,
        default: 0
    }
}
```   


## Posts APIs
### POST /upload
- Upload file by taking the data from request body.
- _Response format_
    - *On success* - Return HTTP status 200 and Post Into in response body.
    - *On error* - Return a suitable error message with a valid HTTP status code.

### GET /file/:fileId
- Download the Image.
- _Response format_
  - *On success* - Return HTTP status 200 and returns the post document.
  - *On error* - Return a suitable error message with a valid HTTP status code.

## Front-End
### Landing Page(Light)
![Landing-page png](https://github.com/Soumyaranjanp68/File_Sharing/assets/119596556/2d23e4c6-c993-4797-9d89-7088d0b26e69)

### While Click-on Upload Button
![upload-click](https://github.com/Soumyaranjanp68/File_Sharing/assets/119596556/46dc30ac-7817-43b3-b932-6f49ad15abba)

### While Uploading Image
![upload-image](https://github.com/Soumyaranjanp68/File_Sharing/assets/119596556/bca01100-8400-4247-b5ac-de7f3e3aa5d1)

### While Sharing Image Link
![Sharing-Image png](https://github.com/Soumyaranjanp68/File_Sharing/assets/119596556/91be5966-26a1-456c-aadd-fbcdc823d389)

### While Download Image 
![Download-Image png](https://github.com/Soumyaranjanp68/File_Sharing/assets/119596556/a79cc03b-cbdd-4ed7-9d7e-cf312d902f11)




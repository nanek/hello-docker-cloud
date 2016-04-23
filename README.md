# hello-docker-cloud

    # Build docker image
    docker build -t <your username>/hello-docker-cloud .
    
    # Run to test locally
    docker run -t -i -p 3000:3000 --rm <your username>/hello-docker-cloud

    # Push to docker hub registry
    docker push <your username>/hello-docker-cloud:latest
    
    # Tag and push to docker hub registry
    docker tag <your username>/hello-docker-cloud <your username>/hello-docker-cloud:1
    docker push <your username>/hello-docker-cloud:1
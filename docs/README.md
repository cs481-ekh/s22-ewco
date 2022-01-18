##Running Locally
Clone the repository, then navigate to the directory and run the following command:
> **Note**: Ensure Docker is installed
```bash
sudo docker run -it --rm \
    --volume="$PWD:/srv/jekyll" \
    -p 4000:4000 jekyll/jekyll \
    jekyll serve
```

The application should now be available from a web browser at http://localhost:4000

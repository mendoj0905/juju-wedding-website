# registry=jujubeee314
registry=registry.justinmendoza.net
imageName=juju-wedding-website
tag=2022.8-dev

docker build --pull --rm -f Dockerfile.$imageName -t $imageName:$tag .
docker push $registry/$imageName:$tag
kubectl apply -f k8s/deployment.yml
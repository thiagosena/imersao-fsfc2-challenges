FROM golang:1.16

WORKDIR /go/src
ENV PATH="/go/bin:${PATH}"

COPY . .
RUN GOOS=linux go build main.go

EXPOSE 8000
CMD ["./main"]
FROM alpine:latest

	# Install required packages in a single layer to keep image small
RUN apk add --no-cache \
	nano \
	fastfetch 

	# Set environment variables for name
ENV name="AlpineOs" \
    password="123alpinsoo" 

	# Command to execute after Container starts
CMD sh -c "\
	echo '----- Operating system name is ${name} -----' && \
	echo '- - -password: ${password}- - -' && \
	fastfetch \
"

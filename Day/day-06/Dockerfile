# pulling image from docker hub
FROM alpine:latest

# Install required packages in a single layer to keep image small
RUN apk add --no-cache \
	fastfetch

# Declare environment variables
ENV name="Gabriel" \
    course="Docker"

# execute commands when container launches
CMD sh -c "\
	echo '-----✅ lauch successful' && \
	echo '___Course:${course}___' && \
	'fastfetch' "

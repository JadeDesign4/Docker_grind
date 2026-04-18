FROM alpine:latest

# Install required packages in a single layer to keep image size small
RUN apk add --no-cache \
	fastfetch \
	nano \
	curl

# Set environment variables for the studentl tracker
ENV student_goal="Thinkbook" \
    name="Gabriel" \
    course="Docker"

# Print student info and launch fastfetch when container starts
CMD sh -c "\
	echo 'Name: Akib ${name}' && \
	echo 'Course: Currently learning ${course}' && \
	echo 'konnichiwa! Stacking skills for that thinkbook 😊' && \
	fastfetch \
"

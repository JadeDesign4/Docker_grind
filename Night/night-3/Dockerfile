
FROM alpine:latest

RUN apk add --no-cache \
	nano \
	curl \
	bash 

ENV student_goal="Thinkbook" \
	course="Docker" \
	hours="4hrs"

CMD sh -c "\
	fastfetch && \ 
	echo 'I want a ${student_goal} && \
	echo 'I'm currently studying the ${course} course with Gemini' && \
"



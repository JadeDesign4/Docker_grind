echo "Starting docker spamming...."
for i in {1..10000}; do echo "Spamming logs for Day 13 test $i"; done | xargs -I {} docker exec pomodoro-app echo {}

session="webdev"
tmux has-session -d -s $session 2>/dev/null

if [ $? != 0 ]; then
	tmux new-session -d -s $session -n "editor"
	tmux send-keys -t $session:editor "vim ." C-m

	tmux new-window -t $session -n "server"
	tmux send-keys -t $session:server "live-server" C-m

	tmux new-window -t $session -n "git"
	tmux send-keys -t $session:git "lazygit" C-m

	tmux select-window -t $session:editor
fi

tmux attach-session -t $session

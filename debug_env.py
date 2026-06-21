import os, sys
print('=== python executable ===')
print(sys.executable)
print('=== sys.path ===')
for p in sys.path:
    print(' ', p)
print('=== env COSYVOICE_BASE ===')
print(os.environ.get('COSYVOICE_BASE', '(not set)'))
print('=== env HANAKO_AUDIO_PLAYER_DIR ===')
print(os.environ.get('HANAKO_AUDIO_PLAYER_DIR', '(not set)'))

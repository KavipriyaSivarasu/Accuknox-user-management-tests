import psutil
from datetime import datetime

CPU_THRESHOLD = 80
MEMORY_THRESHOLD = 80
DISK_THRESHOLD = 80

cpu = psutil.cpu_percent(interval=1)
memory = psutil.virtual_memory().percent
disk = psutil.disk_usage('/').percent

print("\n===== SYSTEM HEALTH REPORT =====")
print("Time:", datetime.now())
print(f"CPU Usage: {cpu}%")
print(f"Memory Usage: {memory}%")
print(f"Disk Usage: {disk}%")

if cpu > CPU_THRESHOLD:
    print("ALERT: CPU Usage Exceeded Threshold!")

if memory > MEMORY_THRESHOLD:
    print("ALERT: Memory Usage Exceeded Threshold!")

if disk > DISK_THRESHOLD:
    print("ALERT: Disk Usage Exceeded Threshold!")

print("\nRunning Processes:")
for proc in psutil.process_iter(['pid', 'name']):
    print(proc.info)

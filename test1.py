import serial
import random 
import json
ser = serial.Serial("/dev/ttyS0")
ser.baudrate = 9600

while(1):
	data = ser.read(1)
	if data == ':':
		temp = ser.read(1)
		heartrate = ser.read(1)
		heartrate1 = random.randint(75,80)
		state = ser.read(1)

		
		dict = {}
		
		dict['heartrate'] = heartrate1
		dict['temperature'] = ord(temp)+25
		dict['status'] = ord(state)
		with open('values.json', 'w') as outfile:
			json.dump(dict,outfile)
            

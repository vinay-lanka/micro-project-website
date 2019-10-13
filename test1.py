import serial
import json
ser = serial.Serial("/dev/ttyS0")
ser.baudrate = 9600

while(1):
	data = ser.read(1)
	if data == ':':
		temp = ser.read(1)
		heartrate = ser.read(1)
		state = ser.read(1)

		
		dict = {}
		
		dict['heartrate'] = ord(heartrate)
		dict['temperature'] = ord(temp)
		dict['status'] = ord(state)
		with open('values.json', 'w') as outfile:
			json.dump(dict,outfile)
            

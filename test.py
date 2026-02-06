import time
time.sleep(3)
def sloow(text):
    for t in text:
        print(t, end='', flush=True)
        time.sleep(0.2)
    print()
sloow("test or teEssSst is a game (?) about a cat who wants to be your friend!")
sloow("he's created a test to get to know you better, and wants you to try it.")
sloow("the more you engage in your answers, the more he'll like you!")

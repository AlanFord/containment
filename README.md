# containment
practicing with webgl and webvr

Notes so far:
To use orbit, it seems that the "orbiting" is done
around the origin.  Therefore, move the camera away from
the origin.  It is helpful (but probably not required)
to put the scene somewhat near the origin so that it is in
camera view.  But if the scene is away from the origin and
the camera is focused on the scene (using camera.lookAt(scene.position), where is the orbit point?

If the object is too large, it may encompass the camera.  In
that case the object will be invisible if it is partially
outside the fustrum of the camera. 

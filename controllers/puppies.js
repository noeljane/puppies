
module.exports = {

    home: function(req,res){
        res.send('Home page')
    },

    index: function(req,res){
            Puppy.find({},function(err,muchosPuppies){
                if(err) return console.log(err)
                res.json(muchosPuppies)
            })
        },

    show:function(req,res){
        Puppy.findById(req.params.id, function(err,thisPuppy){
            if(err) return console.log(err)
            res.json(thisPuppy)
        })
    },

    create:function(req,res){
        Puppy.create(req.body, function(err,brandNewPuppy){
            if(err) return console.log(err)
            res.json({message:"Uno mas perrito!", puppy: brandNewPuppy})
        })
    },

    update:function(req,res){
        Puppy.create(req.body, function(err,brandNewPuppy){
            if(err) return console.log(err)
            res.json({message:"Uno mas perrito!", puppy: brandNewPuppy})
        })
    },

    delete:function(req,res){
        Puppy.findByIdAndRemove(req.params.id, function(err,deletedPuppy){
            if(err) return console.log(err)
            res.json({message:"Puppy deleted!", puppy: deletedPuppy})
        })
    }

}
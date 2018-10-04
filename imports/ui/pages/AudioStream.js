import './AudioStream.html';


Template.AudioStreamSmart.onCreated( function(){
     this.getAudioTitle = () => FlowRouter.getParam('audioTitle');
     this.autorun( () => {
     this.subscribe('audioStream', this.getAudioTitle());
   });
});


Template.AudioStreamSmart.helpers({
  audioContext: function(){
    const instance = Template.instance();
    const audioTitle = instance.getAudioTitle();
    return Audios.findOne(audioTitle) ? [audioTitle] : [];
  },
  audioArgs: function(audioTitle){
   return Audios.findOne(audioTitle);
  }
});
